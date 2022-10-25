// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { PersonalizeRuntimeClientConfig } from "./PersonalizeRuntimeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PersonalizeRuntimeClientConfig) => ({
  apiVersion: "2018-05-22",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Personalize Runtime",
  urlParser: config?.urlParser ?? parseUrl,
});
