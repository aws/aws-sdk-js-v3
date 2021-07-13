import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudWatchLogsClientConfig } from "./CloudWatchLogsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudWatchLogsClientConfig) => ({
  apiVersion: "2014-03-28",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "CloudWatch Logs"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
