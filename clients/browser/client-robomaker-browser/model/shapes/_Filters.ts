import { List as _List_ } from "@aws-sdk/types";
import { _Filter } from "./_Filter";

export const _Filters: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Filter
  }
};
