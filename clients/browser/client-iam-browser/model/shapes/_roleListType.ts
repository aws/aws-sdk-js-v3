import { List as _List_ } from "@aws-sdk/types";
import { _Role } from "./_Role";

export const _roleListType: _List_ = {
  type: "list",
  member: {
    shape: _Role
  }
};
