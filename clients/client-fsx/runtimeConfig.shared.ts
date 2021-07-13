import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { FSxClientConfig } from "./FSxClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FSxClientConfig) => ({
  apiVersion: "2018-03-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "FSx"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
