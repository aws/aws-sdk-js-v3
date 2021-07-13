import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTFleetHubClientConfig } from "./IoTFleetHubClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTFleetHubClientConfig) => ({
  apiVersion: "2020-11-03",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "IoTFleetHub"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
