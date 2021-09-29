import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SWFClientConfig } from "./SWFClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SWFClientConfig) => ({
  apiVersion: "2012-01-25",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SWF",
  urlParser: config?.urlParser ?? parseUrl,
});
