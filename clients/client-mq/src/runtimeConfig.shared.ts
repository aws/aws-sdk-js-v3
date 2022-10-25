// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MqClientConfig } from "./MqClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MqClientConfig) => ({
  apiVersion: "2017-11-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "mq",
  urlParser: config?.urlParser ?? parseUrl,
});
