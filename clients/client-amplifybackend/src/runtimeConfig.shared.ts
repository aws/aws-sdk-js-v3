import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { AmplifyBackendClientConfig } from "./AmplifyBackendClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AmplifyBackendClientConfig) => ({
  apiVersion: "2020-08-11",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "AmplifyBackend",
  urlParser: config?.urlParser ?? parseUrl,
});
