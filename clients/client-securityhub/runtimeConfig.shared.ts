import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SecurityHubClientConfig } from "./SecurityHubClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SecurityHubClientConfig) => ({
  apiVersion: "2018-10-26",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "SecurityHub"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
