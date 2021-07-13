import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudDirectoryClientConfig } from "./CloudDirectoryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudDirectoryClientConfig) => ({
  apiVersion: "2017-01-11",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "CloudDirectory"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
