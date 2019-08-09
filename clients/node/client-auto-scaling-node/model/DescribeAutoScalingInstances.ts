import { DescribeAutoScalingInstancesInput } from "./DescribeAutoScalingInstancesInput";
import { DescribeAutoScalingInstancesOutput } from "./DescribeAutoScalingInstancesOutput";
import { InvalidNextToken } from "./InvalidNextToken";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
