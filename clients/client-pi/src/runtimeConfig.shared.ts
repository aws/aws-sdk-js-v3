import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { PIClientConfig } from "./PIClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PIClientConfig) => ({
  apiVersion: "2018-02-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "PI",
  urlParser: config?.urlParser ?? parseUrl,
});
