import { DescribeTargetGroupsInput } from "./DescribeTargetGroupsInput";
import { DescribeTargetGroupsOutput } from "./DescribeTargetGroupsOutput";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTargetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTargetGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTargetGroupsInput
  },
  output: {
    shape: DescribeTargetGroupsOutput,
    resultWrapper: "DescribeTargetGroupsResult"
  },
  errors: [
    {
      shape: LoadBalancerNotFoundException
    },
    {
      shape: TargetGroupNotFoundException
    }
  ]
};
