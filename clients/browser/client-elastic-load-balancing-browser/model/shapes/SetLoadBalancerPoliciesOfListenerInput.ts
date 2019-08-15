import { _PolicyNames } from "./_PolicyNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetLoadBalancerPoliciesOfListenerInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "LoadBalancerPort", "PolicyNames"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    LoadBalancerPort: {
      shape: {
        type: "integer"
      }
    },
    PolicyNames: {
      shape: _PolicyNames
    }
  }
};
