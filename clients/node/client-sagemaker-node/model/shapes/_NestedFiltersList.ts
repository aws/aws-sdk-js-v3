import { List as _List_ } from "@aws-sdk/types";
import { _NestedFilters } from "./_NestedFilters";

export const _NestedFiltersList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _NestedFilters
  }
};
