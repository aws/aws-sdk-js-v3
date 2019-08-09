import { List as _List_ } from "@aws-sdk/types";
import { _LaunchPermission } from "./_LaunchPermission";

export const _LaunchPermissionList: _List_ = {
  type: "list",
  member: {
    shape: _LaunchPermission,
    locationName: "item"
  }
};
