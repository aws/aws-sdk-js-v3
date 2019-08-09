import { DescribeAutoScalingGroupsInput } from "./DescribeAutoScalingGroupsInput";
import { DescribeAutoScalingGroupsOutput } from "./DescribeAutoScalingGroupsOutput";
import { InvalidNextToken } from "./InvalidNextToken";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeAutoScalingGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAutoScalingGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAutoScalingGroupsInput
  },
  output: {
    shape: DescribeAutoScalingGroupsOutput,
    resultWrapper: "DescribeAutoScalingGroupsResult"
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
