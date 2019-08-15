import { List as _List_ } from "@aws-sdk/types";
import { _DocumentFilter } from "./_DocumentFilter";

export const _DocumentFilterList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _DocumentFilter
  }
};
