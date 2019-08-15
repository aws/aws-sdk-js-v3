import { List as _List_ } from "@aws-sdk/types";
import { _DateFilter } from "./_DateFilter";

export const _DateFilterList: _List_ = {
  type: "list",
  member: {
    shape: _DateFilter
  }
};
