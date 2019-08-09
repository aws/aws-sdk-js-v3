import { _CreateVolumePermissionList } from "./_CreateVolumePermissionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateVolumePermissionModifications: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Add: {
      shape: _CreateVolumePermissionList
    },
    Remove: {
      shape: _CreateVolumePermissionList
    }
  }
};
