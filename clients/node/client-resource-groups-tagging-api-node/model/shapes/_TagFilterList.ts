import { List as _List_ } from "@aws-sdk/types";
import { _TagFilter } from "./_TagFilter";

export const _TagFilterList: _List_ = {
  type: "list",
  member: {
    shape: _TagFilter
  }
};
