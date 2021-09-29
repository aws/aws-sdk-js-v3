import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ServiceCatalogAppRegistryClientConfig } from "./ServiceCatalogAppRegistryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceCatalogAppRegistryClientConfig) => ({
  apiVersion: "2020-06-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Service Catalog AppRegistry",
  urlParser: config?.urlParser ?? parseUrl,
});
