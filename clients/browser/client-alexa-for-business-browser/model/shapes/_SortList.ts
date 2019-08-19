import { List as _List_ } from "@aws-sdk/types";
import { _Sort } from "./_Sort";

export const _SortList: _List_ = {
  type: "list",
  member: {
    shape: _Sort
  }
};
