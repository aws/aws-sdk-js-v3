import { _ClassicLoadBalancersConfig } from "./_ClassicLoadBalancersConfig";
import { _TargetGroupsConfig } from "./_TargetGroupsConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadBalancersConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClassicLoadBalancersConfig: {
      shape: _ClassicLoadBalancersConfig,
      locationName: "classicLoadBalancersConfig"
    },
    TargetGroupsConfig: {
      shape: _TargetGroupsConfig,
      locationName: "targetGroupsConfig"
    }
  }
};
