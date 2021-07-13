import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaConvertClientConfig } from "./MediaConvertClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaConvertClientConfig) => ({
  apiVersion: "2017-08-29",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "MediaConvert"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
