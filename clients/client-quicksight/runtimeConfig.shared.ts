import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { QuickSightClientConfig } from "./QuickSightClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: QuickSightClientConfig) => ({
  apiVersion: "2018-04-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "QuickSight",
  urlParser: config?.urlParser ?? parseUrl,
});
