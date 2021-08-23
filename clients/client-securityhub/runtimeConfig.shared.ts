import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SecurityHubClientConfig } from "./SecurityHubClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SecurityHubClientConfig) => ({
  apiVersion: "2018-10-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SecurityHub",
  urlParser: config?.urlParser ?? parseUrl,
});
