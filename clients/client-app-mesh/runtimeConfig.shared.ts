import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AppMeshClientConfig } from "./AppMeshClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppMeshClientConfig) => ({
  apiVersion: "2019-01-25",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "App Mesh"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
