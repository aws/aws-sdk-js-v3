// smithy-typescript generated code
import { EndpointV2, Logger } from "@smithy/types";
import { EndpointParams, resolveEndpoint } from "@smithy/util-endpoints";

import { EndpointParameters } from "./EndpointParameters";
import { ruleSet } from "./ruleset";

export const defaultEndpointResolver = (
  endpointParams: EndpointParameters,
  context: { logger?: Logger } = {}
): EndpointV2 => {
  return resolveEndpoint(ruleSet, {
    endpointParams: endpointParams as EndpointParams,
    logger: context.logger,
  });
};
