import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { PinpointClientConfig } from "./PinpointClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PinpointClientConfig) => ({
  apiVersion: "2016-12-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Pinpoint",
  urlParser: config?.urlParser ?? parseUrl,
});
