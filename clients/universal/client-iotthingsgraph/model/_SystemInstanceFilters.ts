import { List as _List_ } from "@aws-sdk/types";
import { _SystemInstanceFilter } from "./_SystemInstanceFilter";

export const _SystemInstanceFilters: _List_ = {
  type: "list",
  member: {
    shape: _SystemInstanceFilter
  }
};
