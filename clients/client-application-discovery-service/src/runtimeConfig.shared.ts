import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ApplicationDiscoveryServiceClientConfig } from "./ApplicationDiscoveryServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationDiscoveryServiceClientConfig) => ({
  apiVersion: "2015-11-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Application Discovery Service",
  urlParser: config?.urlParser ?? parseUrl,
});
