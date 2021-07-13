import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoT1ClickProjectsClientConfig } from "./IoT1ClickProjectsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoT1ClickProjectsClientConfig) => ({
  apiVersion: "2018-05-14",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "IoT 1Click Projects"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
