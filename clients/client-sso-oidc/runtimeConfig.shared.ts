import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SSOOIDCClientConfig } from "./SSOOIDCClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSOOIDCClientConfig) => ({
  apiVersion: "2019-06-10",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "SSO OIDC"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
