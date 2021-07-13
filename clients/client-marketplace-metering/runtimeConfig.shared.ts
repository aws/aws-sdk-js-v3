import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MarketplaceMeteringClientConfig } from "./MarketplaceMeteringClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceMeteringClientConfig) => ({
  apiVersion: "2016-01-14",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Marketplace Metering"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
