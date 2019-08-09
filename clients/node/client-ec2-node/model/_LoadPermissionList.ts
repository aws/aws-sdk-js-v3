import { List as _List_ } from "@aws-sdk/types";
import { _LoadPermission } from "./_LoadPermission";

export const _LoadPermissionList: _List_ = {
  type: "list",
  member: {
    shape: _LoadPermission,
    locationName: "item"
  }
};
