import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LexModelsV2ClientConfig } from "./LexModelsV2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LexModelsV2ClientConfig) => ({
  apiVersion: "2020-08-07",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Lex Models V2"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
