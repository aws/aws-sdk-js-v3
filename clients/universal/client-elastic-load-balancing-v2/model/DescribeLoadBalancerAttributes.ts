import { DescribeLoadBalancerAttributesInput } from "./DescribeLoadBalancerAttributesInput";
import { DescribeLoadBalancerAttributesOutput } from "./DescribeLoadBalancerAttributesOutput";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeLoadBalancerAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLoadBalancerAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLoadBalancerAttributesInput
  },
  output: {
    shape: DescribeLoadBalancerAttributesOutput,
    resultWrapper: "DescribeLoadBalancerAttributesResult"
  },
  errors: [
    {
      shape: LoadBalancerNotFoundException
    }
  ]
};
