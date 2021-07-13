import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { OrganizationsClientConfig } from "./OrganizationsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OrganizationsClientConfig) => ({
  apiVersion: "2016-11-28",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Organizations"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
