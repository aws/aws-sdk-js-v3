import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { STSClientConfig } from "./STSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: STSClientConfig) => ({
  apiVersion: "2011-06-15",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "STS"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
