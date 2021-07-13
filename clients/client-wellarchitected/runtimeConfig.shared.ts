import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { WellArchitectedClientConfig } from "./WellArchitectedClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WellArchitectedClientConfig) => ({
  apiVersion: "2020-03-31",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "WellArchitected"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
