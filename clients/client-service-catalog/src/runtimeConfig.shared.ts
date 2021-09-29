import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ServiceCatalogClientConfig } from "./ServiceCatalogClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServiceCatalogClientConfig) => ({
  apiVersion: "2015-12-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Service Catalog",
  urlParser: config?.urlParser ?? parseUrl,
});
