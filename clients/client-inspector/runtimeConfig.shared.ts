import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { InspectorClientConfig } from "./InspectorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: InspectorClientConfig) => ({
  apiVersion: "2016-02-16",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Inspector",
  urlParser: config?.urlParser ?? parseUrl,
});
