import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AppRunnerClientConfig } from "./AppRunnerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppRunnerClientConfig) => ({
  apiVersion: "2020-05-15",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "AppRunner"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
