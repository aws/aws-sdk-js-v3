import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CustomerProfilesClientConfig } from "./CustomerProfilesClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CustomerProfilesClientConfig) => ({
  apiVersion: "2020-08-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Customer Profiles",
  urlParser: config?.urlParser ?? parseUrl,
});
