import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { HealthLakeClientConfig } from "./HealthLakeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: HealthLakeClientConfig) => ({
  apiVersion: "2017-07-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "HealthLake"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
