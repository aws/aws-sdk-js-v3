import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTClientConfig } from "./IoTClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTClientConfig) => ({
  apiVersion: "2015-05-28",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "IoT"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
