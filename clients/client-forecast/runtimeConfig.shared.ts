import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ForecastClientConfig } from "./ForecastClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ForecastClientConfig) => ({
  apiVersion: "2018-06-26",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "forecast"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
