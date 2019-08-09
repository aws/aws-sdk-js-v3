import { DescribeLoadBalancerTargetGroupsInput } from "./DescribeLoadBalancerTargetGroupsInput";
import { DescribeLoadBalancerTargetGroupsOutput } from "./DescribeLoadBalancerTargetGroupsOutput";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeLoadBalancerTargetGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLoadBalancerTargetGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLoadBalancerTargetGroupsInput
  },
  output: {
    shape: DescribeLoadBalancerTargetGroupsOutput,
    resultWrapper: "DescribeLoadBalancerTargetGroupsResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
