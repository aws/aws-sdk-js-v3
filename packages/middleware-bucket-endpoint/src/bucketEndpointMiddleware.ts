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
        const clientRegion = await options.region();
        const { partition: clientPartition, signingRegion: clientSigningRegion } =
          (await options.regionInfoProvider(getPseudoRegion(clientRegion))) || {};
        const { hostname, bucketEndpoint } = bucketHostname({
          bucketName: validateArn(bucketName) ? parseArn(bucketName) : bucketName,
          baseHostname: request.hostname,
          accelerateEndpoint: options.useAccelerateEndpoint,
          dualstackEndpoint: options.useDualstackEndpoint,
          pathStyleEndpoint: options.forcePathStyle,
          tlsCompatible: request.protocol === "https:",
          useArnRegion: await options.useArnRegion(),
          clientPartition,
          clientSigningRegion,
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
