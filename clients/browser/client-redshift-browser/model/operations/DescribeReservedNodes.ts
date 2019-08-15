import { DescribeReservedNodesInput } from "../shapes/DescribeReservedNodesInput";
import { DescribeReservedNodesOutput } from "../shapes/DescribeReservedNodesOutput";
import { ReservedNodeNotFoundFault } from "../shapes/ReservedNodeNotFoundFault";
import { DependentServiceUnavailableFault } from "../shapes/DependentServiceUnavailableFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReservedNodes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedNodes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReservedNodesInput
  },
  output: {
    shape: DescribeReservedNodesOutput,
    resultWrapper: "DescribeReservedNodesResult"
  },
  errors: [
    {
      shape: ReservedNodeNotFoundFault
    },
    {
      shape: DependentServiceUnavailableFault
    }
  ]
};
