import {
  HandlerExecutionContext,
  MetadataBearer,
  RelativeMiddlewareOptions,
  SerializeHandler,
  SerializeHandlerArguments,
  SerializeHandlerOutput,
  SerializeMiddleware,
} from "@smithy/types";

import { PreviouslyResolved } from "./region-redirect-middleware";

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
      const regionProviderRef = config.region;
      let unlock = () => {};
      if (context.__s3RegionRedirect) {
        Object.defineProperty(config, "region", {
          writable: false,
          value: async () => {
            return context.__s3RegionRedirect;
          },
        });
        unlock = () =>
          Object.defineProperty(config, "region", {
            writable: true,
            value: regionProviderRef,
          });
      }
      try {
        const result = await next(args);
        if (context.__s3RegionRedirect) {
          unlock();
          const region = await config.region();
          if (originalRegion !== region) {
            throw new Error("Region was not restored following S3 region redirect.");
          }
        }
        return result;
      } catch (e: unknown) {
        unlock();
        throw e;
      }
    };
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
