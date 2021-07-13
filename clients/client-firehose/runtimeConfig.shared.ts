import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { FirehoseClientConfig } from "./FirehoseClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FirehoseClientConfig) => ({
  apiVersion: "2015-08-04",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Firehose"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
