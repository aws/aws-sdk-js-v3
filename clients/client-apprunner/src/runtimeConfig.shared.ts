import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AppRunnerClientConfig } from "./AppRunnerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppRunnerClientConfig) => ({
  apiVersion: "2020-05-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "AppRunner",
  urlParser: config?.urlParser ?? parseUrl,
});
