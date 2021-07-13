import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SavingsplansClientConfig } from "./SavingsplansClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SavingsplansClientConfig) => ({
  apiVersion: "2019-06-28",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "savingsplans"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
