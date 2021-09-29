import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { WAFRegionalClientConfig } from "./WAFRegionalClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WAFRegionalClientConfig) => ({
  apiVersion: "2016-11-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "WAF Regional",
  urlParser: config?.urlParser ?? parseUrl,
});
