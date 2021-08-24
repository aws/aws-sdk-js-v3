import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IoT1ClickProjectsClientConfig } from "./IoT1ClickProjectsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoT1ClickProjectsClientConfig) => ({
  apiVersion: "2018-05-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoT 1Click Projects",
  urlParser: config?.urlParser ?? parseUrl,
});
