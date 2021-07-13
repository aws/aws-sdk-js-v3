import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MarketplaceCatalogClientConfig } from "./MarketplaceCatalogClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceCatalogClientConfig) => ({
  apiVersion: "2018-09-17",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Marketplace Catalog"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
