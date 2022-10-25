// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTTwinMakerClientConfig } from "./IoTTwinMakerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTTwinMakerClientConfig) => ({
  apiVersion: "2021-11-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoTTwinMaker",
  urlParser: config?.urlParser ?? parseUrl,
});
