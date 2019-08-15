import { List as _List_ } from "@aws-sdk/types";
import { _RoleUsageType } from "./_RoleUsageType";

export const _RoleUsageListType: _List_ = {
  type: "list",
  member: {
    shape: _RoleUsageType
  }
};
