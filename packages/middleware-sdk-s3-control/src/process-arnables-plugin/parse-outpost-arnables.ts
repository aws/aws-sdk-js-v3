import {
  getArnResources as getS3AccesspointArnResources,
  validateAccountId,
  validateNoDualstack,
  validateOutpostService,
  validatePartition,
  validateRegion,
} from "@aws-sdk/middleware-bucket-endpoint";
import { ARN, parse as parseArn, validate as validateArn } from "@aws-sdk/util-arn-parser";
import { partition } from "@aws-sdk/util-endpoints";
import { InitializeHandlerOptions, InitializeMiddleware } from "@smithy/types";

import { S3ControlResolvedConfig } from "../configurations";
import { CONTEXT_ARN_REGION, CONTEXT_OUTPOST_ID, CONTEXT_SIGNING_REGION, CONTEXT_SIGNING_SERVICE } from "../constants";

type ArnableInput = {
  Name?: string;
  Bucket?: string;
  AccountId?: string;
};

/**
 * Validate input `Name` or `Bucket` parameter is acceptable ARN format. If so, modify the input ARN to inferred
 * resource identifier, notify later middleware to redirect request to Outpost endpoint, signing service and signing
 * region.
 */
export const parseOutpostArnablesMiddleaware =
  (options: S3ControlResolvedConfig): InitializeMiddleware<ArnableInput, any> =>
  (next, context) =>
  async (args) => {
    const { input } = args;

    const parameter: "Name" | "Bucket" | undefined =
      input.Name && validateArn(input.Name) ? "Name" : input.Bucket && validateArn(input.Bucket) ? "Bucket" : undefined;
    if (!parameter) return next(args);

    const clientRegion = await options.region();
    const useArnRegion = await options.useArnRegion();
    const useFipsEndpoint = await options.useFipsEndpoint();
    const useDualstackEndpoint = await options.useDualstackEndpoint();
    const baseRegion = clientRegion;

    let clientPartition: string;
    let signingRegion: string;
    if (options.regionInfoProvider) {
      ({ partition: clientPartition, signingRegion = baseRegion } = (await options.regionInfoProvider(baseRegion, {
        useFipsEndpoint,
        useDualstackEndpoint,
      }))!);
    } else {
      signingRegion = context.endpointV2?.properties?.authSchemes?.[0]?.signingRegion || baseRegion;
      clientPartition = partition(signingRegion).name;
    }

    const validatorOptions: ValidateOutpostsArnOptions = {
      useFipsEndpoint,
      useDualstackEndpoint,
      clientRegion,
      clientPartition,
      signingRegion,
      useArnRegion,
    };
    let arn: ARN;
    if (parameter === "Name") {
      arn = parseArn(input.Name!);
      validateOutpostsArn(arn, validatorOptions);
      const { outpostId, accesspointName } = parseOutpostsAccessPointArnResource(arn.resource);
      input.Name = accesspointName;
      context[CONTEXT_OUTPOST_ID] = outpostId;
    } else {
      arn = parseArn(input.Bucket!);
      validateOutpostsArn(arn, validatorOptions);
      const { outpostId, bucketName } = parseOutpostBucketArnResource(arn.resource);
      input.Bucket = bucketName;
      context[CONTEXT_OUTPOST_ID] = outpostId;
    }
    context[CONTEXT_SIGNING_SERVICE] = arn.service; // s3-outposts
    context[CONTEXT_SIGNING_REGION] = useArnRegion ? arn.region : signingRegion;

    if (!input.AccountId) {
      input.AccountId = arn.accountId;
    } else if (input.AccountId !== arn.accountId) {
      throw new Error(`AccountId is incompatible with account id inferred from ${parameter}`);
    }

    if (useArnRegion) context[CONTEXT_ARN_REGION] = arn.region;

    return next(args);
  };

export const parseOutpostArnablesMiddleawareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["CONVERT_ARN", "OUTPOST_BUCKET_ARN", "OUTPOST_ACCESS_POINT_ARN", "OUTPOST"],
  name: "parseOutpostArnablesMiddleaware",
};

type ValidateOutpostsArnOptions = {
  clientRegion: string;
  signingRegion: string;
  clientPartition: string;
  useArnRegion: boolean;
  useDualstackEndpoint: boolean;
  useFipsEndpoint: boolean;
};

/**
 * validate ARN with 's3-outposts' in the service section of the ARN:
 * ARN supplied to 'Name' parameter should comply template:
 *    arn:{partition}:s3-outposts:{region}:{accountId}:outpost/{outpostId}/accesspoint/{accesspointName}
 * ARN supplied to 'Bucket' parameter should comply template:
 *    arn:{partition}:s3-outposts:{region}:{accountId}:outpost/{outpostId}/bucket/{bucketName}
 */
const validateOutpostsArn = (
  arn: ARN,
  {
    clientRegion,
    signingRegion,
    clientPartition,
    useArnRegion,
    useFipsEndpoint,
    useDualstackEndpoint,
  }: ValidateOutpostsArnOptions
) => {
  const { service, partition, accountId, region } = arn;
  validateOutpostService(service);
  validatePartition(partition, { clientPartition });
  validateAccountId(accountId);
  validateRegion(region, {
    useArnRegion,
    clientRegion,
    clientSigningRegion: signingRegion,
    useFipsEndpoint,
    allowFipsRegion: true,
  });
  validateNoDualstack(useDualstackEndpoint);
};

const parseOutpostsAccessPointArnResource = (
  resource: string
): {
  outpostId: string;
  accesspointName: string;
} => {
  const { outpostId, accesspointName } = getS3AccesspointArnResources(resource);
  if (!outpostId) {
    throw new Error("ARN resource should begin with 'outpost'");
  }
  return {
    outpostId,
    accesspointName,
  };
};

const parseOutpostBucketArnResource = (
  resource: string
): {
  outpostId: string;
  bucketName: string;
} => {
  const delimiter = resource.includes(":") ? ":" : "/";
  const [resourceType, ...rest] = resource.split(delimiter);
  if (resourceType === "outpost") {
    // Parse outpost ARN
    if (!rest[0] || rest[1] !== "bucket" || !rest[2] || rest.length !== 3) {
      throw new Error(
        `Outpost Bucket ARN should have resource outpost${delimiter}{outpostId}${delimiter}bucket${delimiter}{bucketName}`
      );
    }
    const [outpostId, _, bucketName] = rest;
    return { outpostId, bucketName };
  } else {
    throw new Error(`ARN resource should begin with 'outpost${delimiter}'`);
  }
};
