import { List as _List_ } from "@aws-sdk/types";
import { _StackResourceSummary } from "./_StackResourceSummary";

export const _StackResourceSummaries: _List_ = {
  type: "list",
  member: {
    shape: _StackResourceSummary
  }
};
