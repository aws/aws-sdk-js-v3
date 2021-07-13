import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LightsailClientConfig } from "./LightsailClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LightsailClientConfig) => ({
  apiVersion: "2016-11-28",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Lightsail"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
