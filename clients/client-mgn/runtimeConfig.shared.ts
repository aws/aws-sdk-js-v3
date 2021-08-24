import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MgnClientConfig } from "./MgnClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MgnClientConfig) => ({
  apiVersion: "2020-02-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "mgn",
  urlParser: config?.urlParser ?? parseUrl,
});
