// smithy-typescript generated code
import { EndpointV2, HandlerExecutionContext } from "@aws-sdk/types";
import { EndpointParams, resolveEndpoint } from "@aws-sdk/util-endpoints";

import { EndpointParameters } from "./EndpointParameters";
import { ruleSet } from "./ruleset";

export const defaultEndpointResolver = (
  endpointParams: EndpointParameters,
  context: HandlerExecutionContext = {}
): EndpointV2 => {
  context.endpointV2DecisionLog = [];

  return resolveEndpoint(ruleSet, {
    endpointParams: endpointParams as EndpointParams,
    logger: context.logger,
    decisionLog: context.endpointV2DecisionLog,
  });
};
