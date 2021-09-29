import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SMSClientConfig } from "./SMSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SMSClientConfig) => ({
  apiVersion: "2016-10-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SMS",
  urlParser: config?.urlParser ?? parseUrl,
});
