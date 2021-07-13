import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MacieClientConfig } from "./MacieClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MacieClientConfig) => ({
  apiVersion: "2017-12-19",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Macie"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
