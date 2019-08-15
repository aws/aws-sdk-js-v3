import { List as _List_ } from "@aws-sdk/types";
import { _StringFilter } from "./_StringFilter";

export const _StringFilterList: _List_ = {
  type: "list",
  member: {
    shape: _StringFilter
  }
};
