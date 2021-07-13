import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoTDataPlaneClientConfig } from "./IoTDataPlaneClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTDataPlaneClientConfig) => ({
  apiVersion: "2015-05-28",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "IoT Data Plane"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
