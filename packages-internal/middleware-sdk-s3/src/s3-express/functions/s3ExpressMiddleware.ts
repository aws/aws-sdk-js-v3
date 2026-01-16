import { setFeature } from "@aws-sdk/core";
import { AwsCredentialIdentity } from "@aws-sdk/types";
import { HttpRequest } from "@smithy/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOptions,
  BuildMiddleware,
  HandlerExecutionContext,
  Logger,
  MemoizedProvider,
  Pluggable,
} from "@smithy/types";

import { S3_EXPRESS_AUTH_SCHEME, S3_EXPRESS_BACKEND, S3_EXPRESS_BUCKET_TYPE, SESSION_TOKEN_HEADER } from "../constants";
import { S3ExpressIdentity } from "../interfaces/S3ExpressIdentity";
import { S3ExpressIdentityProvider } from "../interfaces/S3ExpressIdentityProvider";

declare module "@smithy/types" {
  interface HandlerExecutionContext {
    /**
     * Reserved key, only when using S3.
     */
    s3ExpressIdentity?: S3ExpressIdentity;
  }
}

/**
 * @internal
 */
export interface S3ExpressResolvedConfig {
  logger?: Logger;
  s3ExpressIdentityProvider: S3ExpressIdentityProvider;
  credentials: MemoizedProvider<AwsCredentialIdentity>;
}

/**
 * @internal
 */
export const s3ExpressMiddleware: (options: S3ExpressResolvedConfig) => BuildMiddleware<any, any> = (
  options: S3ExpressResolvedConfig
) => {
  return (next: BuildHandler<any, any>, context: HandlerExecutionContext) =>
    async (args: BuildHandlerArguments<any>) => {
      if (context.endpointV2) {
        const endpoint = context.endpointV2!;

        const isS3ExpressAuth = endpoint.properties?.authSchemes?.[0]?.name === S3_EXPRESS_AUTH_SCHEME;

        const isS3ExpressBucket =
          endpoint.properties?.backend === S3_EXPRESS_BACKEND ||
          endpoint.properties?.bucketType === S3_EXPRESS_BUCKET_TYPE;

        if (isS3ExpressBucket) {
          setFeature(context, "S3_EXPRESS_BUCKET", "J");
          context.isS3ExpressBucket = true;
        }

        if (isS3ExpressAuth) {
          const requestBucket = args.input.Bucket as string;
          if (requestBucket) {
            const s3ExpressIdentity: S3ExpressIdentity = await options.s3ExpressIdentityProvider.getS3ExpressIdentity(
              await options.credentials(),
              {
                Bucket: requestBucket,
              }
            );

            context.s3ExpressIdentity = s3ExpressIdentity;
            if (HttpRequest.isInstance(args.request) && s3ExpressIdentity.sessionToken) {
              args.request.headers[SESSION_TOKEN_HEADER] = s3ExpressIdentity.sessionToken!;
            }
          }
        }
      }
      return next(args);
    };
};

/**
 * @internal
 */
export const s3ExpressMiddlewareOptions: BuildHandlerOptions = {
  name: "s3ExpressMiddleware",
  step: "build",
  tags: ["S3", "S3_EXPRESS"],
  override: true,
};

/**
 * @internal
 */
export const getS3ExpressPlugin = (options: S3ExpressResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(s3ExpressMiddleware(options), s3ExpressMiddlewareOptions);
  },
});
