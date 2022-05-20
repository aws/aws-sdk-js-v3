// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { IoTTwinMakerClientConfig } from "./IoTTwinMakerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTTwinMakerClientConfig) => ({
  apiVersion: "2021-11-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IoTTwinMaker",
  urlParser: config?.urlParser ?? parseUrl,
});
