import { DescribeLoadBalancersInput } from "../shapes/DescribeLoadBalancersInput";
import { DescribeLoadBalancersOutput } from "../shapes/DescribeLoadBalancersOutput";
import { LoadBalancerNotFoundException } from "../shapes/LoadBalancerNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeLoadBalancers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeLoadBalancers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeLoadBalancersInput
  },
  output: {
    shape: DescribeLoadBalancersOutput,
    resultWrapper: "DescribeLoadBalancersResult"
  },
  errors: [
    {
      shape: LoadBalancerNotFoundException
    }
  ]
};
