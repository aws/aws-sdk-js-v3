import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ProtonClientConfig } from "./ProtonClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ProtonClientConfig) => ({
  apiVersion: "2020-07-20",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Proton"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
