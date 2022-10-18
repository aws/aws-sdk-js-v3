// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { FraudDetectorClientConfig } from "./FraudDetectorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: FraudDetectorClientConfig) => ({
  apiVersion: "2019-11-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "FraudDetector",
  urlParser: config?.urlParser ?? parseUrl,
});
