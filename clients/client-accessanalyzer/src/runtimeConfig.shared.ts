// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { AccessAnalyzerClientConfig } from "./AccessAnalyzerClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AccessAnalyzerClientConfig) => ({
  apiVersion: "2019-11-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "AccessAnalyzer",
  urlParser: config?.urlParser ?? parseUrl,
});
