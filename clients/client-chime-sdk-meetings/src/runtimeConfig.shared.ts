// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { ChimeSDKMeetingsClientConfig } from "./ChimeSDKMeetingsClient";
import { defaultRegionInfoProvider } from "./endpoints";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ChimeSDKMeetingsClientConfig) => ({
  apiVersion: "2021-07-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Chime SDK Meetings",
  urlParser: config?.urlParser ?? parseUrl,
});
