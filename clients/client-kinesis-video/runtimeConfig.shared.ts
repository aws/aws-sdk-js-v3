import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KinesisVideoClientConfig } from "./KinesisVideoClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoClientConfig) => ({
  apiVersion: "2017-09-30",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Kinesis Video"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
