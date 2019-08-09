import { List as _List_ } from "@aws-sdk/types";
import { _QueryFilter } from "./_QueryFilter";

export const _QueryFilters: _List_ = {
  type: "list",
  member: {
    shape: _QueryFilter
  }
};
