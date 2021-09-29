import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DynamoDBStreamsClientConfig } from "./DynamoDBStreamsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DynamoDBStreamsClientConfig) => ({
  apiVersion: "2012-08-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "DynamoDB Streams",
  urlParser: config?.urlParser ?? parseUrl,
});
