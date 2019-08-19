import { List as _List_ } from "@aws-sdk/types";
import { _OpsFilter } from "./_OpsFilter";

export const _OpsFilterList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _OpsFilter
  }
};
