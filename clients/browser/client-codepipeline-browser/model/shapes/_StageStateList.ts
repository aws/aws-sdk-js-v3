import { List as _List_ } from "@aws-sdk/types";
import { _StageState } from "./_StageState";

export const _StageStateList: _List_ = {
  type: "list",
  member: {
    shape: _StageState
  }
};
