import { DescribeLoadBalancerPoliciesInput } from "./DescribeLoadBalancerPoliciesInput";
import { DescribeLoadBalancerPoliciesOutput } from "./DescribeLoadBalancerPoliciesOutput";
import { AccessPointNotFoundException } from "./AccessPointNotFoundException";
import { PolicyNotFoundException } from "./PolicyNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeLoadBalancerPolicies: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLoadBalancerPolicies",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLoadBalancerPoliciesInput
  },
  output: {
    shape: DescribeLoadBalancerPoliciesOutput,
    resultWrapper: "DescribeLoadBalancerPoliciesResult"
  },
  errors: [
    {
      shape: AccessPointNotFoundException
    },
    {
      shape: PolicyNotFoundException
    }
  ]
};
