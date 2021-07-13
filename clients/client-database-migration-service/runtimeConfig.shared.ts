import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DatabaseMigrationServiceClientConfig } from "./DatabaseMigrationServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DatabaseMigrationServiceClientConfig) => ({
  apiVersion: "2016-01-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Database Migration Service"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
