import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DynamoDBClientConfig } from "./DynamoDBClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DynamoDBClientConfig) => ({
  apiVersion: "2012-08-10",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "DynamoDB"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
