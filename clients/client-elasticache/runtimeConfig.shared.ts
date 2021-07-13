import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ElastiCacheClientConfig } from "./ElastiCacheClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElastiCacheClientConfig) => ({
  apiVersion: "2015-02-02",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "ElastiCache"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
