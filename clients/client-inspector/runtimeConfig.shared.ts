import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { InspectorClientConfig } from "./InspectorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: InspectorClientConfig) => ({
  apiVersion: "2016-02-16",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Inspector"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
