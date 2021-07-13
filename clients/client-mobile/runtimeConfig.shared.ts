import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MobileClientConfig } from "./MobileClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MobileClientConfig) => ({
  apiVersion: "2017-07-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Mobile"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
