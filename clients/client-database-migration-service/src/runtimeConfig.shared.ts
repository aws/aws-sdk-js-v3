import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DatabaseMigrationServiceClientConfig } from "./DatabaseMigrationServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DatabaseMigrationServiceClientConfig) => ({
  apiVersion: "2016-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Database Migration Service",
  urlParser: config?.urlParser ?? parseUrl,
});
