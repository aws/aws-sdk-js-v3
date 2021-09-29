import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EMRClientConfig } from "./EMRClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EMRClientConfig) => ({
  apiVersion: "2009-03-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "EMR",
  urlParser: config?.urlParser ?? parseUrl,
});
