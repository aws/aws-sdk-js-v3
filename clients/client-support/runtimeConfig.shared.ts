import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SupportClientConfig } from "./SupportClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SupportClientConfig) => ({
  apiVersion: "2013-04-15",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Support"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
