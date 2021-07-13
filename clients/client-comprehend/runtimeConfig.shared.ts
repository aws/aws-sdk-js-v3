import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ComprehendClientConfig } from "./ComprehendClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ComprehendClientConfig) => ({
  apiVersion: "2017-11-27",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Comprehend"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
