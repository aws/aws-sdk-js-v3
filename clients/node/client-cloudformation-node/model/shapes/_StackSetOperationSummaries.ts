import { List as _List_ } from "@aws-sdk/types";
import { _StackSetOperationSummary } from "./_StackSetOperationSummary";

export const _StackSetOperationSummaries: _List_ = {
  type: "list",
  member: {
    shape: _StackSetOperationSummary
  }
};
