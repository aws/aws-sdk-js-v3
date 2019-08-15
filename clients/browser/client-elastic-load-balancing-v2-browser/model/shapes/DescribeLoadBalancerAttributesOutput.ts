import { _LoadBalancerAttributes } from "./_LoadBalancerAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoadBalancerAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _LoadBalancerAttributes
    }
  }
};
