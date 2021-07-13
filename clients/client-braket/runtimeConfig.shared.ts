import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { BraketClientConfig } from "./BraketClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BraketClientConfig) => ({
  apiVersion: "2019-09-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Braket"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
