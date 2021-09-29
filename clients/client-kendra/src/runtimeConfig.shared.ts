import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KendraClientConfig } from "./KendraClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KendraClientConfig) => ({
  apiVersion: "2019-02-03",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "kendra",
  urlParser: config?.urlParser ?? parseUrl,
});
