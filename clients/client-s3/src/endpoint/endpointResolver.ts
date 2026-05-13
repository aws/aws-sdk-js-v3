// smithy-typescript generated code
import { awsEndpointFunctions } from "@aws-sdk/core/client";
import { type EndpointParams, customEndpointFunctions, decideEndpoint, EndpointCache } from "@smithy/core/endpoints";
import type { EndpointV2, Logger } from "@smithy/types";

import { bdd } from "./bdd";
import type { EndpointParameters } from "./EndpointParameters";

const cache = new EndpointCache({
  size: 50,
  params: [
    "Accelerate",
    "Bucket",
    "DisableAccessPoints",
    "DisableMultiRegionAccessPoints",
    "DisableS3ExpressSessionAuth",
    "Endpoint",
    "ForcePathStyle",
    "Region",
    "UseArnRegion",
    "UseDualStack",
    "UseFIPS",
    "UseGlobalEndpoint",
    "UseObjectLambdaEndpoint",
    "UseS3ExpressControlEndpoint",
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
