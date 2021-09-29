import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DLMClientConfig } from "./DLMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DLMClientConfig) => ({
  apiVersion: "2018-01-12",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "DLM",
  urlParser: config?.urlParser ?? parseUrl,
});
