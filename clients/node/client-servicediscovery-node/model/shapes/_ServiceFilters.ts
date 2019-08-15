import { List as _List_ } from "@aws-sdk/types";
import { _ServiceFilter } from "./_ServiceFilter";

export const _ServiceFilters: _List_ = {
  type: "list",
  member: {
    shape: _ServiceFilter
  }
};
