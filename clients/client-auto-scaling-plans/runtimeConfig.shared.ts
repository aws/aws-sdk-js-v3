import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AutoScalingPlansClientConfig } from "./AutoScalingPlansClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AutoScalingPlansClientConfig) => ({
  apiVersion: "2018-01-06",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Auto Scaling Plans"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
