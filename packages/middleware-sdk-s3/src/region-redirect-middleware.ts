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
        // console.log("Region Redirect", clientConfig.followRegionRedirects, err.name, err.$metadata.httpStatusCode);
        if (
          clientConfig.followRegionRedirects &&
          err.name === "PermanentRedirect" &&
          err.$metadata.httpStatusCode === 301
        ) {
          try {
            const actualRegion = err.$response.headers["x-amz-bucket-region"];
            context.logger?.debug(`Redirecting from ${await clientConfig.region()} to ${actualRegion}`);
            context.__s3RegionRedirect = actualRegion;
          } catch (e) {
            throw new Error("Region redirect failed: " + e);
          }
          return next(args);
        } else {
          throw err;
        }
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
