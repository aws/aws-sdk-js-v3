import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { GroundStationClientConfig } from "./GroundStationClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GroundStationClientConfig) => ({
  apiVersion: "2019-05-23",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "GroundStation"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
