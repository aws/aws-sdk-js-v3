import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AppConfigClientConfig } from "./AppConfigClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppConfigClientConfig) => ({
  apiVersion: "2019-10-09",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "AppConfig"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
