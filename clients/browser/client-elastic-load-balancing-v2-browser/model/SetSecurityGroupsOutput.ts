import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetSecurityGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SecurityGroupIds: {
      shape: _SecurityGroups
    }
  }
};
