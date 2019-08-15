import { List as _List_ } from "@aws-sdk/types";
import { _CreateVolumePermission } from "./_CreateVolumePermission";

export const _CreateVolumePermissionList: _List_ = {
  type: "list",
  member: {
    shape: _CreateVolumePermission,
    locationName: "item"
  }
};
