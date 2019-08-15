import { DescribeReservedCacheNodesOfferingsInput } from "../shapes/DescribeReservedCacheNodesOfferingsInput";
import { DescribeReservedCacheNodesOfferingsOutput } from "../shapes/DescribeReservedCacheNodesOfferingsOutput";
import { ReservedCacheNodesOfferingNotFoundFault } from "../shapes/ReservedCacheNodesOfferingNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReservedCacheNodesOfferings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedCacheNodesOfferings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReservedCacheNodesOfferingsInput
  },
  output: {
    shape: DescribeReservedCacheNodesOfferingsOutput,
    resultWrapper: "DescribeReservedCacheNodesOfferingsResult"
  },
  errors: [
    {
      shape: ReservedCacheNodesOfferingNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
