import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MarketplaceMeteringClientConfig } from "./MarketplaceMeteringClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceMeteringClientConfig) => ({
  apiVersion: "2016-01-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Marketplace Metering",
  urlParser: config?.urlParser ?? parseUrl,
});
