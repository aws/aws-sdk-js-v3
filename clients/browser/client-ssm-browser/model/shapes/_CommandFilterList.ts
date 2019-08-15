import { List as _List_ } from "@aws-sdk/types";
import { _CommandFilter } from "./_CommandFilter";

export const _CommandFilterList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _CommandFilter
  }
};
