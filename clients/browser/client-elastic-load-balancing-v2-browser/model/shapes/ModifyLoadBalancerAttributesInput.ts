import { _LoadBalancerAttributes } from "./_LoadBalancerAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyLoadBalancerAttributesInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerArn", "Attributes"],
  members: {
    LoadBalancerArn: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _LoadBalancerAttributes
    }
  }
};
