import { _Instances } from "./_Instances";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterInstancesWithLoadBalancerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Instances: {
      shape: _Instances
    }
  }
};
