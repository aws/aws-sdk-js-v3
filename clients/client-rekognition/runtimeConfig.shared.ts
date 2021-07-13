import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { RekognitionClientConfig } from "./RekognitionClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RekognitionClientConfig) => ({
  apiVersion: "2016-06-27",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Rekognition"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
