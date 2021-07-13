import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ElasticsearchServiceClientConfig } from "./ElasticsearchServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticsearchServiceClientConfig) => ({
  apiVersion: "2015-01-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Elasticsearch Service"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
