import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
  Pluggable,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";
import { parse as parseArn, validate as validateArn } from "@aws-sdk/util-arn-parser";

import { bucketHostname } from "./bucketHostname";
import { getPseudoRegion } from "./bucketHostnameUtils";
import { BucketEndpointResolvedConfig } from "./configurations";

export function bucketEndpointMiddleware(options: BucketEndpointResolvedConfig): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: BuildHandler<any, Output>): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    const { Bucket: bucketName } = args.input;
    let replaceBucketInPath = options.bucketEndpoint;
    const request = args.request;
    if (HttpRequest.isInstance(request)) {
      if (options.bucketEndpoint) {
        request.hostname = bucketName;
      } else {
        const isBucketNameArn = validateArn(bucketName);
        const { hostname, bucketEndpoint } = bucketHostname({
          bucketName: isBucketNameArn ? parseArn(bucketName) : bucketName,
          baseHostname: request.hostname,
          accelerateEndpoint: options.useAccelerateEndpoint,
          dualstackEndpoint: options.useDualstackEndpoint,
          pathStyleEndpoint: options.forcePathStyle,
          tlsCompatible: request.protocol === "https:",
          ...(isBucketNameArn ? await getArnHostnameParameters(options) : {}),
        });

        request.hostname = hostname;
        replaceBucketInPath = bucketEndpoint;
      }

      if (replaceBucketInPath) {
        request.path = request.path.replace(/^(\/)?[^\/]+/, "");
        if (request.path === "") {
          request.path = "/";
        }
      }
    }

    return next({ ...args, request });
  };
}

const getArnHostnameParameters = async (options: BucketEndpointResolvedConfig) => {
  const clientRegion = await options.region();
  const clientRegionInfo = await options.regionInfoProvider(getPseudoRegion(clientRegion));
  return {
    useArnRegion: await options.useArnRegion(),
    clientPartition: clientRegionInfo?.partition,
    clientSigningRegion: clientRegionInfo?.signingRegion,
  };
};

export const bucketEndpointMiddlewareOptions: RelativeMiddlewareOptions = {
  tags: ["BUCKET_ENDPOINT"],
  name: "bucketEndpointMiddleware",
  relation: "before",
  toMiddleware: "hostHeaderMiddleware",
};

export const getBucketEndpointPlugin = (options: BucketEndpointResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
  },
});
