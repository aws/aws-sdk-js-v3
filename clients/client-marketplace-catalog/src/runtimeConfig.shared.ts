import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MarketplaceCatalogClientConfig } from "./MarketplaceCatalogClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceCatalogClientConfig) => ({
  apiVersion: "2018-09-17",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Marketplace Catalog",
  urlParser: config?.urlParser ?? parseUrl,
});
