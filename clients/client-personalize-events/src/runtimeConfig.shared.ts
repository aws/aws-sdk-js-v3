// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { PersonalizeEventsClientConfig } from "./PersonalizeEventsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PersonalizeEventsClientConfig) => ({
  apiVersion: "2018-03-22",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Personalize Events",
  urlParser: config?.urlParser ?? parseUrl,
});
