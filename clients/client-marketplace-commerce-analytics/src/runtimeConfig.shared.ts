import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MarketplaceCommerceAnalyticsClientConfig } from "./MarketplaceCommerceAnalyticsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceCommerceAnalyticsClientConfig) => ({
  apiVersion: "2015-07-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Marketplace Commerce Analytics",
  urlParser: config?.urlParser ?? parseUrl,
});
