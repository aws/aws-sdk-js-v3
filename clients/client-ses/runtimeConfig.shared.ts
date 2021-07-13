import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SESClientConfig } from "./SESClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SESClientConfig) => ({
  apiVersion: "2010-12-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "SES"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
