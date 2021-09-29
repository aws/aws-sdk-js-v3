import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SupportClientConfig } from "./SupportClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SupportClientConfig) => ({
  apiVersion: "2013-04-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Support",
  urlParser: config?.urlParser ?? parseUrl,
});
