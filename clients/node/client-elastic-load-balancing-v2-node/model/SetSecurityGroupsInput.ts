import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetSecurityGroupsInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerArn", "SecurityGroups"],
  members: {
    LoadBalancerArn: {
      shape: {
        type: "string"
      }
    },
    SecurityGroups: {
      shape: _SecurityGroups
    }
  }
};
