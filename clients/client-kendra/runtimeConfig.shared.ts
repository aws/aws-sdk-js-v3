import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KendraClientConfig } from "./KendraClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KendraClientConfig) => ({
  apiVersion: "2019-02-03",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "kendra"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
