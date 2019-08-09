import { DescribeReservedCacheNodesInput } from "./DescribeReservedCacheNodesInput";
import { DescribeReservedCacheNodesOutput } from "./DescribeReservedCacheNodesOutput";
import { ReservedCacheNodeNotFoundFault } from "./ReservedCacheNodeNotFoundFault";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { InvalidParameterCombinationException } from "./InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
