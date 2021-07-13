import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudTrailClientConfig } from "./CloudTrailClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudTrailClientConfig) => ({
  apiVersion: "2013-11-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "CloudTrail"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
