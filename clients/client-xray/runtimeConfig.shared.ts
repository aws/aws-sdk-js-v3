import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { XRayClientConfig } from "./XRayClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: XRayClientConfig) => ({
  apiVersion: "2016-04-12",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "XRay"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
