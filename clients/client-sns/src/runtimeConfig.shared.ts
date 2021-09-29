import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SNSClientConfig } from "./SNSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SNSClientConfig) => ({
  apiVersion: "2010-03-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SNS",
  urlParser: config?.urlParser ?? parseUrl,
});
