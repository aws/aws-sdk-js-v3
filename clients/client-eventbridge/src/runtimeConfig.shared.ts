// smithy-typescript generated code
import { SignatureV4MultiRegion } from "@aws-sdk/signature-v4-multi-region";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { EventBridgeClientConfig } from "./EventBridgeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EventBridgeClientConfig) => ({
  apiVersion: "2015-10-07",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "EventBridge",
  signerConstructor: config?.signerConstructor ?? SignatureV4MultiRegion,
  urlParser: config?.urlParser ?? parseUrl,
});
