import { List as _List_ } from "@aws-sdk/types";
import { _PatchFilter } from "./_PatchFilter";

export const _PatchFilterList: _List_ = {
  type: "list",
  member: {
    shape: _PatchFilter
  }
};
