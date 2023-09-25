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
  RelativeMiddlewareOptions,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@smithy/types";

/**
 * @internal
 */
interface PreviouslyResolved {
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
        return next(args);
      } catch (err) {
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
export const regionRedirectEndpointMiddleware = (config: PreviouslyResolved): SerializeMiddleware<any, any> => {
  return <Output extends MetadataBearer>(
      next: SerializeHandler<any, Output>,
      context: HandlerExecutionContext
    ): SerializeHandler<any, Output> =>
    async (args: SerializeHandlerArguments<any>): Promise<SerializeHandlerOutput<Output>> => {
      const originalRegion = await config.region();
      if (context.__s3RegionRedirect) {
        const regionProviderRef = config.region;
        config.region = async () => {
          config.region = regionProviderRef;
          return context.__s3RegionRedirect;
        };
      }
      const result = await next(args);
      if (context.__s3RegionRedirect) {
        const region = await config.region();
        if (originalRegion !== region) {
          throw new Error("Region was not restored following S3 region redirect.");
        }
      }
      return result;
    };
};

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
export const regionRedirectEndpointMiddlewareOptions: RelativeMiddlewareOptions = {
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectEndpointMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware",
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
