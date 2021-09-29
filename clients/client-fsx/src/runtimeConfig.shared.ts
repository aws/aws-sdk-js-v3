import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { FSxClientConfig } from "./FSxClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FSxClientConfig) => ({
  apiVersion: "2018-03-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "FSx",
  urlParser: config?.urlParser ?? parseUrl,
});
