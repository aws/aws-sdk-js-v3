import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SSMClientConfig } from "./SSMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSMClientConfig) => ({
  apiVersion: "2014-11-06",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SSM",
  urlParser: config?.urlParser ?? parseUrl,
});
