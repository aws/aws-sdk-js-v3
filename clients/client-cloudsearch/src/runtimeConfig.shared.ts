import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudSearchClientConfig } from "./CloudSearchClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudSearchClientConfig) => ({
  apiVersion: "2013-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CloudSearch",
  urlParser: config?.urlParser ?? parseUrl,
});
