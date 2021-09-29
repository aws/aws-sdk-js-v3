import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ShieldClientConfig } from "./ShieldClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ShieldClientConfig) => ({
  apiVersion: "2016-06-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Shield",
  urlParser: config?.urlParser ?? parseUrl,
});
