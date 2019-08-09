import { List as _List_ } from "@aws-sdk/types";
import { _GroupSummary } from "./_GroupSummary";

export const _GroupSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _GroupSummary
  }
};
