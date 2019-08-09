import { DescribeLoadBalancerPolicyTypesInput } from "./DescribeLoadBalancerPolicyTypesInput";
import { DescribeLoadBalancerPolicyTypesOutput } from "./DescribeLoadBalancerPolicyTypesOutput";
import { PolicyTypeNotFoundException } from "./PolicyTypeNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
