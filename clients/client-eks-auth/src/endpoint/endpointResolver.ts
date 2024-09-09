// smithy-typescript generated code
import { awsEndpointFunctions } from "@aws-sdk/util-endpoints";
import { EndpointV2, Logger } from "@smithy/types";
import { customEndpointFunctions, EndpointCache, EndpointParams, resolveEndpoint } from "@smithy/util-endpoints";

import { EndpointParameters } from "./EndpointParameters";
import { ruleSet } from "./ruleset";

const cache = new EndpointCache({
  size: 50,
  params: ["Endpoint", "Region", "UseFIPS"],
});

export const defaultEndpointResolver = (
  endpointParams: EndpointParameters,
  context: { logger?: Logger } = {}
): EndpointV2 => {
  return cache.get(endpointParams as EndpointParams, () =>
    resolveEndpoint(ruleSet, {
      endpointParams: endpointParams as EndpointParams,
      logger: context.logger,
    })
  );
};

customEndpointFunctions.aws = awsEndpointFunctions;
