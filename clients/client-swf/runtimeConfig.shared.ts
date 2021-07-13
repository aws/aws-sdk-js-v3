import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SWFClientConfig } from "./SWFClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SWFClientConfig) => ({
  apiVersion: "2012-01-25",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "SWF"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
