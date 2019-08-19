import { _Instances } from "./_Instances";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterInstancesWithLoadBalancerInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "Instances"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    Instances: {
      shape: _Instances
    }
  }
};
