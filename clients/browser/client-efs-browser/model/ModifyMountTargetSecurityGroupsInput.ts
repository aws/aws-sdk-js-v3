import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyMountTargetSecurityGroupsInput: _Structure_ = {
  type: "structure",
  required: ["MountTargetId"],
  members: {
    MountTargetId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "MountTargetId"
    },
    SecurityGroups: {
      shape: _SecurityGroups
    }
  }
};
