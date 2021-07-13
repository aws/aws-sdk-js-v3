import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaConnectClientConfig } from "./MediaConnectClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaConnectClientConfig) => ({
  apiVersion: "2018-11-14",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "MediaConnect"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
