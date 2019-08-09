import { List as _List_ } from "@aws-sdk/types";
import { _NumberFilter } from "./_NumberFilter";

export const _NumberFilterList: _List_ = {
  type: "list",
  member: {
    shape: _NumberFilter
  }
};
