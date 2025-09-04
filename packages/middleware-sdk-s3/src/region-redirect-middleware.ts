import {
  HandlerExecutionContext,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
  Pluggable,
  Provider,
} from "@smithy/types";

import {
  regionRedirectEndpointMiddleware,
  regionRedirectEndpointMiddlewareOptions,
} from "./region-redirect-endpoint-middleware";

/**
 * @internal
 */
export interface PreviouslyResolved {
  region: Provider<string>;
  followRegionRedirects: boolean;
}

/**
 * @internal
 */
export function regionRedirectMiddleware(clientConfig: PreviouslyResolved): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(
      next: InitializeHandler<any, Output>,
      context: HandlerExecutionContext
    ): InitializeHandler<any, Output> =>
    async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
      try {
        return await next(args);
      } catch (err) {
        if (clientConfig.followRegionRedirects) {
          const statusCode = err?.$metadata?.httpStatusCode;
          const isHeadBucket = context.commandName === "HeadBucketCommand";
          const bucketRegionHeader = err?.$response?.headers?.["x-amz-bucket-region"];
          if (bucketRegionHeader) {
            if (
              statusCode === 301 ||
              (statusCode === 400 && (err?.name === "IllegalLocationConstraintException" || isHeadBucket))
            ) {
              try {
                const actualRegion = bucketRegionHeader;
                context.logger?.debug(`Redirecting from ${await clientConfig.region()} to ${actualRegion}`);
                context.__s3RegionRedirect = actualRegion;
              } catch (e) {
                throw new Error("Region redirect failed: " + e);
              }
              return next(args);
            }
          }
        }
        throw err;
      }
    };
}

/**
 * @internal
 */
export const regionRedirectMiddlewareOptions: InitializeHandlerOptions = {
  step: "initialize",
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectMiddleware",
  override: true,
};

/**
 * @internal
 */
export const getRegionRedirectMiddlewarePlugin = (clientConfig: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(regionRedirectMiddleware(clientConfig), regionRedirectMiddlewareOptions);
    clientStack.addRelativeTo(regionRedirectEndpointMiddleware(clientConfig), regionRedirectEndpointMiddlewareOptions);
  },
});
