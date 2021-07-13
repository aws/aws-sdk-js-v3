import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EC2ClientConfig } from "./EC2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EC2ClientConfig) => ({
  apiVersion: "2016-11-15",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "EC2"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
