import {
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
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
      if (context.__s3RegionRedirect) {
        config.region = async () => {
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

/**
 * @internal
 */
export const getRegionRedirectEndpointMiddlewarePlugin = (clientConfig: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(regionRedirectEndpointMiddleware(clientConfig), regionRedirectEndpointMiddlewareOptions);
  },
});
