import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EMRContainersClientConfig } from "./EMRContainersClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EMRContainersClientConfig) => ({
  apiVersion: "2020-10-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "EMR containers",
  urlParser: config?.urlParser ?? parseUrl,
});
