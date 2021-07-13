import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AppStreamClientConfig } from "./AppStreamClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppStreamClientConfig) => ({
  apiVersion: "2016-12-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "AppStream"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
