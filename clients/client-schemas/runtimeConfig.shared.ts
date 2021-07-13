import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SchemasClientConfig } from "./SchemasClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SchemasClientConfig) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "schemas"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
