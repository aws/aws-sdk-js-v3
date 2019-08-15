import { List as _List_ } from "@aws-sdk/types";
import { _FlowExecutionSummary } from "./_FlowExecutionSummary";

export const _FlowExecutionSummaries: _List_ = {
  type: "list",
  member: {
    shape: _FlowExecutionSummary
  }
};
