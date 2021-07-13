import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { S3ClientConfig } from "./S3Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3ClientConfig) => ({
  apiVersion: "2006-03-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "S3"),
  signingEscapePath: coalesce(config.signingEscapePath, false),
  urlParser: coalesce(config.urlParser, parseUrl),
  useArnRegion: coalesce(config.useArnRegion, false),
});
