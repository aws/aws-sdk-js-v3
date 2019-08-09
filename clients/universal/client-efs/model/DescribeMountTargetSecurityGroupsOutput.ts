import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMountTargetSecurityGroupsOutput: _Structure_ = {
  type: "structure",
  required: ["SecurityGroups"],
  members: {
    SecurityGroups: {
      shape: _SecurityGroups
    }
  }
};
