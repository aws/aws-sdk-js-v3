import { List as _List_ } from "@aws-sdk/types";
import { _StackInstanceSummary } from "./_StackInstanceSummary";

export const _StackInstanceSummaries: _List_ = {
  type: "list",
  member: {
    shape: _StackInstanceSummary
  }
};
