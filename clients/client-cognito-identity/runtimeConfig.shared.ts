import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CognitoIdentityClientConfig } from "./CognitoIdentityClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CognitoIdentityClientConfig) => ({
  apiVersion: "2014-06-30",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Cognito Identity"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
