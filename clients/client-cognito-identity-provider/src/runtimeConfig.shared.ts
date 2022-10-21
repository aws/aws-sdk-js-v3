// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { CognitoIdentityProviderClientConfig } from "./CognitoIdentityProviderClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CognitoIdentityProviderClientConfig) => ({
  apiVersion: "2016-04-18",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Cognito Identity Provider",
  urlParser: config?.urlParser ?? parseUrl,
});
