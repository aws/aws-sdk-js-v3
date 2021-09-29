import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ConnectParticipantClientConfig } from "./ConnectParticipantClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ConnectParticipantClientConfig) => ({
  apiVersion: "2018-09-07",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ConnectParticipant",
  urlParser: config?.urlParser ?? parseUrl,
});
