import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ApplySecurityGroupsToLoadBalancerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityGroups: {
      shape: _SecurityGroups
    }
  }
};
