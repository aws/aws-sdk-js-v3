import { List as _List_ } from "@aws-sdk/types";
import { _JobExecutionSummaryForJob } from "./_JobExecutionSummaryForJob";

export const _JobExecutionSummaryForJobList: _List_ = {
  type: "list",
  member: {
    shape: _JobExecutionSummaryForJob
  }
};
