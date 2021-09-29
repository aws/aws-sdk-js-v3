import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ElasticsearchServiceClientConfig } from "./ElasticsearchServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ElasticsearchServiceClientConfig) => ({
  apiVersion: "2015-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Elasticsearch Service",
  urlParser: config?.urlParser ?? parseUrl,
});
