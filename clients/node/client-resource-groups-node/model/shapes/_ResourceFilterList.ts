import { List as _List_ } from "@aws-sdk/types";
import { _ResourceFilter } from "./_ResourceFilter";

export const _ResourceFilterList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceFilter
  }
};
