import { List as _List_ } from "@aws-sdk/types";
import { _Filter } from "./_Filter";

export const _Filters: _List_ = {
  type: "list",
  member: {
    shape: _Filter
  }
};
