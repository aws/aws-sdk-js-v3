// smithy-typescript generated code
import { awsEndpointFunctions } from "@aws-sdk/core/client";
import { type EndpointParams, customEndpointFunctions, decideEndpoint, EndpointCache } from "@smithy/core/endpoints";
import type { EndpointV2, Logger } from "@smithy/types";

import { bdd } from "./bdd";
import type { EndpointParameters } from "./EndpointParameters";

const cache = new EndpointCache({
  size: 50,
  params: [
    "AccountId",
    "AccountIdEndpointMode",
    "ChannelARN",
    "ConsumerARN",
    "Endpoint",
    "OperationType",
    "QueueARN",
    "Region",
    "ResourceARN",
    "ResourceType",
    "StreamARN",
    "StreamId",
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
  const params = { ...endpointParams } as EndpointParams;
  params.ResourceType ??= "";
  return cache.get(params, () =>
    decideEndpoint(bdd, {
      endpointParams: params,
      logger: context.logger,
    })
  );
};

customEndpointFunctions.aws = awsEndpointFunctions;
