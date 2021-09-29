import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { PinpointSMSVoiceClientConfig } from "./PinpointSMSVoiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PinpointSMSVoiceClientConfig) => ({
  apiVersion: "2018-09-05",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Pinpoint SMS Voice",
  urlParser: config?.urlParser ?? parseUrl,
});
