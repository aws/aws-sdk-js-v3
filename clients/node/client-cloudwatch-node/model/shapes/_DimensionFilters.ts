import { List as _List_ } from "@aws-sdk/types";
import { _DimensionFilter } from "./_DimensionFilter";

export const _DimensionFilters: _List_ = {
  type: "list",
  member: {
    shape: _DimensionFilter
  }
};
