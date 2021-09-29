import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { BraketClientConfig } from "./BraketClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BraketClientConfig) => ({
  apiVersion: "2019-09-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Braket",
  urlParser: config?.urlParser ?? parseUrl,
});
