import { DescribeAutoScalingInstancesInput } from "../shapes/DescribeAutoScalingInstancesInput";
import { DescribeAutoScalingInstancesOutput } from "../shapes/DescribeAutoScalingInstancesOutput";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAutoScalingInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAutoScalingInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAutoScalingInstancesInput
  },
  output: {
    shape: DescribeAutoScalingInstancesOutput,
    resultWrapper: "DescribeAutoScalingInstancesResult"
  },
  errors: [
    {
      shape: InvalidNextToken
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
