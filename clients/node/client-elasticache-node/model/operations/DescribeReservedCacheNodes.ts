import { DescribeReservedCacheNodesInput } from "../shapes/DescribeReservedCacheNodesInput";
import { DescribeReservedCacheNodesOutput } from "../shapes/DescribeReservedCacheNodesOutput";
import { ReservedCacheNodeNotFoundFault } from "../shapes/ReservedCacheNodeNotFoundFault";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReservedCacheNodes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedCacheNodes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReservedCacheNodesInput
  },
  output: {
    shape: DescribeReservedCacheNodesOutput,
    resultWrapper: "DescribeReservedCacheNodesResult"
  },
  errors: [
    {
      shape: ReservedCacheNodeNotFoundFault
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
