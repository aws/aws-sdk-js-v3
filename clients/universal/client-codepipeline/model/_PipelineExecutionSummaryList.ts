import { List as _List_ } from "@aws-sdk/types";
import { _PipelineExecutionSummary } from "./_PipelineExecutionSummary";

export const _PipelineExecutionSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _PipelineExecutionSummary
  }
};
