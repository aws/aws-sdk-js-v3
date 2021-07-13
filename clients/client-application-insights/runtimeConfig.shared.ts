import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ApplicationInsightsClientConfig } from "./ApplicationInsightsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationInsightsClientConfig) => ({
  apiVersion: "2018-11-25",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Application Insights"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
