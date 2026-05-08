// smithy-typescript generated code
import { awsEndpointFunctions } from "@aws-sdk/util-endpoints";
import { type EndpointParams, customEndpointFunctions, decideEndpoint, EndpointCache } from "@smithy/core/endpoints";
import type { EndpointV2, Logger } from "@smithy/types";

import { bdd } from "./bdd";
import type { EndpointParameters } from "./EndpointParameters";

const cache = new EndpointCache({
  size: 50,
  params: [
    "AccountId",
    "AccountIdEndpointMode",
    "Endpoint",
    "Region",
    "ResourceArn",
    "ResourceArnList",
    "UseDualStack",
    "UseFIPS",
  ],
});

/**
 * @internal
 */
export const defaultEndpointResolver = (
  endpointParams: EndpointParameters,
  context: { logger?: Logger } = {}
): EndpointV2 => {
  return cache.get(endpointParams as EndpointParams, () =>
    decideEndpoint(bdd, {
      endpointParams: endpointParams as EndpointParams,
      logger: context.logger,
    })
  );
};

customEndpointFunctions.aws = awsEndpointFunctions;
