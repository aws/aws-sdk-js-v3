import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MigrationHubClientConfig } from "./MigrationHubClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubClientConfig) => ({
  apiVersion: "2017-05-31",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Migration Hub"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
