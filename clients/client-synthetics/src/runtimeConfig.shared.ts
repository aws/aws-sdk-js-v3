// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SyntheticsClientConfig } from "./SyntheticsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SyntheticsClientConfig) => ({
  apiVersion: "2017-10-11",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "synthetics",
  urlParser: config?.urlParser ?? parseUrl,
});
