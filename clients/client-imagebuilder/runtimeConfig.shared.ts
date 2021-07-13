import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ImagebuilderClientConfig } from "./ImagebuilderClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ImagebuilderClientConfig) => ({
  apiVersion: "2019-12-02",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "imagebuilder"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
