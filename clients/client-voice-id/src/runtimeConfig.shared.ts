// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { VoiceIDClientConfig } from "./VoiceIDClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: VoiceIDClientConfig) => ({
  apiVersion: "2021-09-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Voice ID",
  urlParser: config?.urlParser ?? parseUrl,
});
