import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { OpenSearchClientConfig } from "./OpenSearchClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OpenSearchClientConfig) => ({
  apiVersion: "2021-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "OpenSearch",
  urlParser: config?.urlParser ?? parseUrl,
});
