import { List as _List_ } from "@aws-sdk/types";
import { _Conflict } from "./_Conflict";

export const _Conflicts: _List_ = {
  type: "list",
  member: {
    shape: _Conflict
  }
};
