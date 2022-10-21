// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IoTSecureTunnelingClientConfig } from "./IoTSecureTunnelingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTSecureTunnelingClientConfig) => ({
  apiVersion: "2018-10-05",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "IoTSecureTunneling",
  urlParser: config?.urlParser ?? parseUrl,
});
