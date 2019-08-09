import { List as _List_ } from "@aws-sdk/types";
import { _IpPermission } from "./_IpPermission";

export const _IpPermissionsList: _List_ = {
  type: "list",
  member: {
    shape: _IpPermission
  }
};
