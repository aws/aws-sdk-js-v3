import { DescribeLoadBalancerPolicyTypesInput } from "../shapes/DescribeLoadBalancerPolicyTypesInput";
import { DescribeLoadBalancerPolicyTypesOutput } from "../shapes/DescribeLoadBalancerPolicyTypesOutput";
import { PolicyTypeNotFoundException } from "../shapes/PolicyTypeNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLoadBalancerPolicyTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLoadBalancerPolicyTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLoadBalancerPolicyTypesInput
  },
  output: {
    shape: DescribeLoadBalancerPolicyTypesOutput,
    resultWrapper: "DescribeLoadBalancerPolicyTypesResult"
  },
  errors: [
    {
      shape: PolicyTypeNotFoundException
    }
  ]
};
