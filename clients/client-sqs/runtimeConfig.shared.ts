import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SQSClientConfig } from "./SQSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SQSClientConfig) => ({
  apiVersion: "2012-11-05",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SQS",
  urlParser: config?.urlParser ?? parseUrl,
});
