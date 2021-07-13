import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTEventsClientConfig } from "./IoTEventsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTEventsClientConfig) => ({
  apiVersion: "2018-07-27",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "IoT Events"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
