import { List as _List_ } from "@aws-sdk/types";
import { _JobExecutionSummary } from "./_JobExecutionSummary";

export const _JobExecutionSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _JobExecutionSummary
  }
};
