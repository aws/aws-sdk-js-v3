import { _LaunchPermissionList } from "./_LaunchPermissionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchPermissionModifications: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Add: {
      shape: _LaunchPermissionList
    },
    Remove: {
      shape: _LaunchPermissionList
    }
  }
};
