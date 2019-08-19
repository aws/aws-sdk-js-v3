import { List as _List_ } from "@aws-sdk/types";
import { _StackSetSummary } from "./_StackSetSummary";

export const _StackSetSummaries: _List_ = {
  type: "list",
  member: {
    shape: _StackSetSummary
  }
};
