import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LexModelBuildingServiceClientConfig } from "./LexModelBuildingServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LexModelBuildingServiceClientConfig) => ({
  apiVersion: "2017-04-19",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Lex Model Building Service"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
