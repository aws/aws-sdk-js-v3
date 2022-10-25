// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SnowDeviceManagementClientConfig } from "./SnowDeviceManagementClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SnowDeviceManagementClientConfig) => ({
  apiVersion: "2021-08-04",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Snow Device Management",
  urlParser: config?.urlParser ?? parseUrl,
});
