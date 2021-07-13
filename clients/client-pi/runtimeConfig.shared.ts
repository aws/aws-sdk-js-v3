import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { PIClientConfig } from "./PIClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PIClientConfig) => ({
  apiVersion: "2018-02-27",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "PI"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
