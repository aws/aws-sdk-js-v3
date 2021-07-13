import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DataSyncClientConfig } from "./DataSyncClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DataSyncClientConfig) => ({
  apiVersion: "2018-11-09",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "DataSync"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
