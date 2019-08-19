import { _PolicyAttributes } from "./_PolicyAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLoadBalancerPolicyInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "PolicyName", "PolicyTypeName"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    PolicyName: {
      shape: {
        type: "string"
      }
    },
    PolicyTypeName: {
      shape: {
        type: "string"
      }
    },
    PolicyAttributes: {
      shape: _PolicyAttributes
    }
  }
};
