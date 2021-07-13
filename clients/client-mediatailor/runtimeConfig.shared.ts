import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaTailorClientConfig } from "./MediaTailorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaTailorClientConfig) => ({
  apiVersion: "2018-04-23",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "MediaTailor"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
