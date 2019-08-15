import { List as _List_ } from "@aws-sdk/types";
import { _ResourceChange } from "./_ResourceChange";

export const _ResourceChanges: _List_ = {
  type: "list",
  member: {
    shape: _ResourceChange
  }
};
