import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EMRClientConfig } from "./EMRClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EMRClientConfig) => ({
  apiVersion: "2009-03-31",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "EMR"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
