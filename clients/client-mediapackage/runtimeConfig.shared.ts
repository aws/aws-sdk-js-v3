import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MediaPackageClientConfig } from "./MediaPackageClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaPackageClientConfig) => ({
  apiVersion: "2017-10-12",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "MediaPackage"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
