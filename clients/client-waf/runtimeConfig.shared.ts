import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { WAFClientConfig } from "./WAFClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WAFClientConfig) => ({
  apiVersion: "2015-08-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "WAF",
  urlParser: config?.urlParser ?? parseUrl,
});
