import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AutoScalingClientConfig } from "./AutoScalingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AutoScalingClientConfig) => ({
  apiVersion: "2011-01-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Auto Scaling"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
