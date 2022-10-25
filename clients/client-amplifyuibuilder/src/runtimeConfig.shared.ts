// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { AmplifyUIBuilderClientConfig } from "./AmplifyUIBuilderClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AmplifyUIBuilderClientConfig) => ({
  apiVersion: "2021-08-11",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "AmplifyUIBuilder",
  urlParser: config?.urlParser ?? parseUrl,
});
