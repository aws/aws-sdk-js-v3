import { List as _List_ } from "@aws-sdk/types";
import { _NetworkInterfacePermission } from "./_NetworkInterfacePermission";

export const _NetworkInterfacePermissionList: _List_ = {
  type: "list",
  member: {
    shape: _NetworkInterfacePermission,
    locationName: "item"
  }
};
