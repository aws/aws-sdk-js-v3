import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { TranscribeClientConfig } from "./TranscribeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TranscribeClientConfig) => ({
  apiVersion: "2017-10-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Transcribe",
  urlParser: config?.urlParser ?? parseUrl,
});
