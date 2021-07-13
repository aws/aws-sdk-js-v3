import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SNSClientConfig } from "./SNSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SNSClientConfig) => ({
  apiVersion: "2010-03-31",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "SNS"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
