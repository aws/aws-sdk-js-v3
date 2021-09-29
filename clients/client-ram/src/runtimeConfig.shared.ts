import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { RAMClientConfig } from "./RAMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RAMClientConfig) => ({
  apiVersion: "2018-01-04",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "RAM",
  urlParser: config?.urlParser ?? parseUrl,
});
