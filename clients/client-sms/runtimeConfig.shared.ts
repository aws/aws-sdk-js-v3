import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SMSClientConfig } from "./SMSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SMSClientConfig) => ({
  apiVersion: "2016-10-24",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "SMS"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
