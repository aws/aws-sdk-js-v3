import { List as _List_ } from "@aws-sdk/types";
import { _Permission } from "./_Permission";

export const _Permissions: _List_ = {
  type: "list",
  member: {
    shape: _Permission
  }
};
