import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { Cloud9ClientConfig } from "./Cloud9Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Cloud9ClientConfig) => ({
  apiVersion: "2017-09-23",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Cloud9"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
