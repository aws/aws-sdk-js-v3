import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ShieldClientConfig } from "./ShieldClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ShieldClientConfig) => ({
  apiVersion: "2016-06-02",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Shield"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
