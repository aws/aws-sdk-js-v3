import { List as _List_ } from "@aws-sdk/types";
import { _MapFilter } from "./_MapFilter";

export const _MapFilterList: _List_ = {
  type: "list",
  member: {
    shape: _MapFilter
  }
};
