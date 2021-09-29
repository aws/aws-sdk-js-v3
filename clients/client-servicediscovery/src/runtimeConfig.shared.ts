import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ServiceDiscoveryClientConfig } from "./ServiceDiscoveryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceDiscoveryClientConfig) => ({
  apiVersion: "2017-03-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ServiceDiscovery",
  urlParser: config?.urlParser ?? parseUrl,
});
