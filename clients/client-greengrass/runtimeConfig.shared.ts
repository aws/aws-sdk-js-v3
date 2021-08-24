import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { GreengrassClientConfig } from "./GreengrassClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GreengrassClientConfig) => ({
  apiVersion: "2017-06-07",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Greengrass",
  urlParser: config?.urlParser ?? parseUrl,
});
