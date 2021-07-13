import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CustomerProfilesClientConfig } from "./CustomerProfilesClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CustomerProfilesClientConfig) => ({
  apiVersion: "2020-08-15",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Customer Profiles"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
