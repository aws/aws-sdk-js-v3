// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { CloudFormationClientConfig } from "./CloudFormationClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudFormationClientConfig) => ({
  apiVersion: "2010-05-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "CloudFormation",
  urlParser: config?.urlParser ?? parseUrl,
});
