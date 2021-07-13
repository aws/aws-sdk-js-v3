import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { Macie2ClientConfig } from "./Macie2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Macie2ClientConfig) => ({
  apiVersion: "2020-01-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Macie2"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
