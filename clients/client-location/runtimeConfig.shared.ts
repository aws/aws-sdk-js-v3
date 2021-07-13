import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LocationClientConfig } from "./LocationClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LocationClientConfig) => ({
  apiVersion: "2020-11-19",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Location"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
