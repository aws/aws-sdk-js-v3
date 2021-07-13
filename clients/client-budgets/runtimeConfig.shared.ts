import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { BudgetsClientConfig } from "./BudgetsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BudgetsClientConfig) => ({
  apiVersion: "2016-10-20",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Budgets"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
