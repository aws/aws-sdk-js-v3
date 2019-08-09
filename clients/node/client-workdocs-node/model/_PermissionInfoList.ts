import { List as _List_ } from "@aws-sdk/types";
import { _PermissionInfo } from "./_PermissionInfo";

export const _PermissionInfoList: _List_ = {
  type: "list",
  member: {
    shape: _PermissionInfo
  }
};
