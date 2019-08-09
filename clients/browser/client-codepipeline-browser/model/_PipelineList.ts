import { List as _List_ } from "@aws-sdk/types";
import { _PipelineSummary } from "./_PipelineSummary";

export const _PipelineList: _List_ = {
  type: "list",
  member: {
    shape: _PipelineSummary
  }
};
