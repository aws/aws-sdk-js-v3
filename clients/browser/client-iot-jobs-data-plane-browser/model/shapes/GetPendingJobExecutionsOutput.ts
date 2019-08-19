import { _JobExecutionSummaryList } from "./_JobExecutionSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPendingJobExecutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    inProgressJobs: {
      shape: _JobExecutionSummaryList
    },
    queuedJobs: {
      shape: _JobExecutionSummaryList
    }
  }
};
