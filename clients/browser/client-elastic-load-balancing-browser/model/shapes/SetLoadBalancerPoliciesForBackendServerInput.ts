import { _PolicyNames } from "./_PolicyNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetLoadBalancerPoliciesForBackendServerInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "InstancePort", "PolicyNames"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    InstancePort: {
      shape: {
        type: "integer"
      }
    },
    PolicyNames: {
      shape: _PolicyNames
    }
  }
};
