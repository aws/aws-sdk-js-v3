import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { PinpointEmailClientConfig } from "./PinpointEmailClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PinpointEmailClientConfig) => ({
  apiVersion: "2018-07-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Pinpoint Email",
  urlParser: config?.urlParser ?? parseUrl,
});
