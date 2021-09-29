import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { GlobalAcceleratorClientConfig } from "./GlobalAcceleratorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GlobalAcceleratorClientConfig) => ({
  apiVersion: "2018-08-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Global Accelerator",
  urlParser: config?.urlParser ?? parseUrl,
});
