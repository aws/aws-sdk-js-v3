import { List as _List_ } from "@aws-sdk/types";
import { _SessionFilter } from "./_SessionFilter";

export const _SessionFilterList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _SessionFilter
  }
};
