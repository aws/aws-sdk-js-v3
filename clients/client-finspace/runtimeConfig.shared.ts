import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { FinspaceClientConfig } from "./FinspaceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FinspaceClientConfig) => ({
  apiVersion: "2021-03-12",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "finspace",
  urlParser: config?.urlParser ?? parseUrl,
});
