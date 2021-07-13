import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { FinspaceClientConfig } from "./FinspaceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FinspaceClientConfig) => ({
  apiVersion: "2021-03-12",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "finspace"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
