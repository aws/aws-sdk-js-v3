import { DescribeLoadBalancerAttributesInput } from "../shapes/DescribeLoadBalancerAttributesInput";
import { DescribeLoadBalancerAttributesOutput } from "../shapes/DescribeLoadBalancerAttributesOutput";
import { AccessPointNotFoundException } from "../shapes/AccessPointNotFoundException";
import { LoadBalancerAttributeNotFoundException } from "../shapes/LoadBalancerAttributeNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
      shape: AccessPointNotFoundException
    },
    {
      shape: LoadBalancerAttributeNotFoundException
    }
  ]
};
