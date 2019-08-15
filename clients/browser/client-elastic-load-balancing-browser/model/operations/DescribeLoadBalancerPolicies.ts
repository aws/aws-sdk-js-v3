import { DescribeLoadBalancerPoliciesInput } from "../shapes/DescribeLoadBalancerPoliciesInput";
import { DescribeLoadBalancerPoliciesOutput } from "../shapes/DescribeLoadBalancerPoliciesOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { PolicyNotFoundException } from "../shapes/PolicyNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
