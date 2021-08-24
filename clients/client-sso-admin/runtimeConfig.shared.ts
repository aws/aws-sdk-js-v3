import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SSOAdminClientConfig } from "./SSOAdminClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSOAdminClientConfig) => ({
  apiVersion: "2020-07-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SSO Admin",
  urlParser: config?.urlParser ?? parseUrl,
});
