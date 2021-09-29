import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AppflowClientConfig } from "./AppflowClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppflowClientConfig) => ({
  apiVersion: "2020-08-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Appflow",
  urlParser: config?.urlParser ?? parseUrl,
});
