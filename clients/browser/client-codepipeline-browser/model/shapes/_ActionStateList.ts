import { List as _List_ } from "@aws-sdk/types";
import { _ActionState } from "./_ActionState";

export const _ActionStateList: _List_ = {
  type: "list",
  member: {
    shape: _ActionState
  }
};
