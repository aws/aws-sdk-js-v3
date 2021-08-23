import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MarketplaceEntitlementServiceClientConfig } from "./MarketplaceEntitlementServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceEntitlementServiceClientConfig) => ({
  apiVersion: "2017-01-11",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Marketplace Entitlement Service",
  urlParser: config?.urlParser ?? parseUrl,
});
