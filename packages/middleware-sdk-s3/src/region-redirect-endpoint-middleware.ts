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
      if (context.__s3RegionRedirect) {
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
export const regionRedirectEndpointMiddlewareOptions: RelativeMiddlewareOptions = {
  tags: ["REGION_REDIRECT", "S3"],
  name: "regionRedirectEndpointMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware",
};
