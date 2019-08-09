import { List as _List_ } from "@aws-sdk/types";
import { _StackSummary } from "./_StackSummary";

export const _StackSummaries: _List_ = {
  type: "list",
  member: {
    shape: _StackSummary
  }
};
