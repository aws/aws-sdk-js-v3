import { bucketHostname } from "./bucketHostname";
import { BucketEndpointResolvedConfig } from "./configurations";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildHandlerOutput,
  BuildMiddleware,
  MetadataBearer,
  Pluggable,
  RelativeLocation
} from "@aws-sdk/types";
import { HttpRequest } from "@aws-sdk/protocol-http";

export function bucketEndpointMiddleware(
  options: BucketEndpointResolvedConfig
): BuildMiddleware<any, any> {
  return <Output extends MetadataBearer>(
    next: BuildHandler<any, Output>
  ): BuildHandler<any, Output> => async (
    args: BuildHandlerArguments<any>
  ): Promise<BuildHandlerOutput<Output>> => {
    const { Bucket: bucketName } = args.input;
    let replaceBucketInPath = options.bucketEndpoint;
    let request = args.request;
    if (HttpRequest.isInstance(request)) {
      if (options.bucketEndpoint) {
        request.hostname = bucketName;
      } else {
        const { hostname, bucketEndpoint } = bucketHostname({
          bucketName,
          baseHostname: request.hostname,
          accelerateEndpoint: options.useAccelerateEndpoint,
          dualstackEndpoint: options.useDualstackEndpoint,
          pathStyleEndpoint: options.forcePathStyle,
          tlsCompatible: request.protocol === "https:"
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

export const bucketEndpointMiddlewareOptions: BuildHandlerOptions &
  RelativeLocation<any, any> = {
  step: "build",
  tags: ["BUCKET_ENDPOINT"],
  name: "bucketEndpointMiddleware",
  relation: "before",
  toMiddleware: "hostHeaderMiddleware"
};

export const getBucketEndpointPlugin = (
  options: BucketEndpointResolvedConfig
): Pluggable<any, any> => ({
  applyToStack: clientStack => {
    clientStack.addRelativeTo(
      bucketEndpointMiddleware(options),
      bucketEndpointMiddlewareOptions
    );
  }
});
