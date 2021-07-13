import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DAXClientConfig } from "./DAXClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DAXClientConfig) => ({
  apiVersion: "2017-04-19",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "DAX"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
