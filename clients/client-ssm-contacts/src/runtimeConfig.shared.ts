import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SSMContactsClientConfig } from "./SSMContactsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSMContactsClientConfig) => ({
  apiVersion: "2021-05-03",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SSM Contacts",
  urlParser: config?.urlParser ?? parseUrl,
});
