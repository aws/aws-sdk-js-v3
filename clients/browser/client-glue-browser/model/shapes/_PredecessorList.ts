import { List as _List_ } from "@aws-sdk/types";
import { _Predecessor } from "./_Predecessor";

export const _PredecessorList: _List_ = {
  type: "list",
  member: {
    shape: _Predecessor
  }
};
