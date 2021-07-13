import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ConfigServiceClientConfig } from "./ConfigServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConfigServiceClientConfig) => ({
  apiVersion: "2014-11-12",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Config Service"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
