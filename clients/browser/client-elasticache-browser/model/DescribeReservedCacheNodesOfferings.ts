import { DescribeReservedCacheNodesOfferingsInput } from "./DescribeReservedCacheNodesOfferingsInput";
import { DescribeReservedCacheNodesOfferingsOutput } from "./DescribeReservedCacheNodesOfferingsOutput";
import { ReservedCacheNodesOfferingNotFoundFault } from "./ReservedCacheNodesOfferingNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
