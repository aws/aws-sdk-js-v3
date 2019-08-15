import { List as _List_ } from "@aws-sdk/types";
import { _GroupFilter } from "./_GroupFilter";

export const _GroupFilterList: _List_ = {
  type: "list",
  member: {
    shape: _GroupFilter
  }
};
