import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CognitoSyncClientConfig } from "./CognitoSyncClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CognitoSyncClientConfig) => ({
  apiVersion: "2014-06-30",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Cognito Sync"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
