import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CodestarNotificationsClientConfig } from "./CodestarNotificationsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodestarNotificationsClientConfig) => ({
  apiVersion: "2019-10-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "codestar notifications",
  urlParser: config?.urlParser ?? parseUrl,
});
