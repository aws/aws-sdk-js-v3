import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SFNClientConfig } from "./SFNClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SFNClientConfig) => ({
  apiVersion: "2016-11-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SFN",
  urlParser: config?.urlParser ?? parseUrl,
});
