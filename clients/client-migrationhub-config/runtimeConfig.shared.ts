import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MigrationHubConfigClientConfig } from "./MigrationHubConfigClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubConfigClientConfig) => ({
  apiVersion: "2019-06-30",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "MigrationHub Config"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
