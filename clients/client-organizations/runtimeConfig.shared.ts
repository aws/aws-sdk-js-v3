import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { OrganizationsClientConfig } from "./OrganizationsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OrganizationsClientConfig) => ({
  apiVersion: "2016-11-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Organizations",
  urlParser: config?.urlParser ?? parseUrl,
});
