import { List as _List_ } from "@aws-sdk/types";
import { _FilterRule } from "./_FilterRule";

export const _FilterList: _List_ = {
  type: "list",
  member: {
    shape: _FilterRule
  }
};
