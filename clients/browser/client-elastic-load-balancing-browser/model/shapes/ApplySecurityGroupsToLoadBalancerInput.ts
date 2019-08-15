import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ApplySecurityGroupsToLoadBalancerInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "SecurityGroups"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    SecurityGroups: {
      shape: _SecurityGroups
    }
  }
};
