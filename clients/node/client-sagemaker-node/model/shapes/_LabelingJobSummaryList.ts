import { List as _List_ } from "@aws-sdk/types";
import { _LabelingJobSummary } from "./_LabelingJobSummary";

export const _LabelingJobSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _LabelingJobSummary
  }
};
