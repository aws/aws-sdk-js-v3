import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { MWAAClientConfig } from "./MWAAClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MWAAClientConfig) => ({
  apiVersion: "2020-07-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MWAA",
  urlParser: config?.urlParser ?? parseUrl,
});
