import { parse as parseArn, validate as validateArn } from "@aws-sdk/util-arn-parser";
import { HttpRequest } from "@smithy/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  BuildMiddleware,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
  RelativeMiddlewareOptions,
} from "@smithy/types";

import { bucketHostname } from "./bucketHostname";
import { BucketEndpointResolvedConfig } from "./configurations";

export const bucketEndpointMiddleware =
  (options: BucketEndpointResolvedConfig): BuildMiddleware<any, any> =>
  <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>,
    context: HandlerExecutionContext
  ): BuildHandler<any, Output> =>
  async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
    const { Bucket: bucketName } = args.input as { Bucket: string };
    let replaceBucketInPath = options.bucketEndpoint;
    const request = args.request;
    if (HttpRequest.isInstance(request)) {
      if (options.bucketEndpoint) {
        request.hostname = bucketName;
      } else if (validateArn(bucketName)) {
        const bucketArn = parseArn(bucketName);
        const clientRegion = await options.region();
        const useDualstackEndpoint = await options.useDualstackEndpoint();
        const useFipsEndpoint = await options.useFipsEndpoint();
        const { partition, signingRegion = clientRegion } =
          (await options.regionInfoProvider(clientRegion, { useDualstackEndpoint, useFipsEndpoint })) || {};
        const useArnRegion = await options.useArnRegion();
        const {
          hostname,
          bucketEndpoint,
          signingRegion: modifiedSigningRegion,
          signingService,
        } = bucketHostname({
          bucketName: bucketArn,
          baseHostname: request.hostname,
          accelerateEndpoint: options.useAccelerateEndpoint,
          dualstackEndpoint: useDualstackEndpoint,
          fipsEndpoint: useFipsEndpoint,
          pathStyleEndpoint: options.forcePathStyle,
          tlsCompatible: request.protocol === "https:",
          useArnRegion,
          clientPartition: partition,
          clientSigningRegion: signingRegion,
          clientRegion: clientRegion,
          isCustomEndpoint: options.isCustomEndpoint,
          disableMultiregionAccessPoints: await options.disableMultiregionAccessPoints(),
        });

        // If the request needs to use a region or service name inferred from ARN that different from client region, we
        // need to set them in the handler context so the signer will use them
        if (modifiedSigningRegion && modifiedSigningRegion !== signingRegion) {
          context["signing_region"] = modifiedSigningRegion;
        }
        if (signingService && signingService !== "s3") {
          context["signing_service"] = signingService;
        }

        request.hostname = hostname;
        replaceBucketInPath = bucketEndpoint;
      } else {
        const clientRegion = await options.region();
        const dualstackEndpoint = await options.useDualstackEndpoint();
        const fipsEndpoint = await options.useFipsEndpoint();
        const { hostname, bucketEndpoint } = bucketHostname({
          bucketName,
          clientRegion,
          baseHostname: request.hostname,
          accelerateEndpoint: options.useAccelerateEndpoint,
          dualstackEndpoint,
          fipsEndpoint,
          pathStyleEndpoint: options.forcePathStyle,
          tlsCompatible: request.protocol === "https:",
          isCustomEndpoint: options.isCustomEndpoint,
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

export const bucketEndpointMiddlewareOptions: RelativeMiddlewareOptions = {
  tags: ["BUCKET_ENDPOINT"],
  name: "bucketEndpointMiddleware",
  relation: "before",
  toMiddleware: "hostHeaderMiddleware",
  override: true,
};

export const getBucketEndpointPlugin = (options: BucketEndpointResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(bucketEndpointMiddleware(options), bucketEndpointMiddlewareOptions);
  },
});
