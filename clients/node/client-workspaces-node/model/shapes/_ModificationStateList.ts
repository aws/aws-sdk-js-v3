import { List as _List_ } from "@aws-sdk/types";
import { _ModificationState } from "./_ModificationState";

export const _ModificationStateList: _List_ = {
  type: "list",
  member: {
    shape: _ModificationState
  }
};
