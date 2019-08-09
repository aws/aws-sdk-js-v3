import { List as _List_ } from "@aws-sdk/types";
import { _RoleDetail } from "./_RoleDetail";

export const _roleDetailListType: _List_ = {
  type: "list",
  member: {
    shape: _RoleDetail
  }
};
