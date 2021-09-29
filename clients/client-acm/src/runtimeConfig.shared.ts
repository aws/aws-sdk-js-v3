import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ACMClientConfig } from "./ACMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ACMClientConfig) => ({
  apiVersion: "2015-12-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ACM",
  urlParser: config?.urlParser ?? parseUrl,
});
