import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LookoutVisionClientConfig } from "./LookoutVisionClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LookoutVisionClientConfig) => ({
  apiVersion: "2020-11-20",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "LookoutVision"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
