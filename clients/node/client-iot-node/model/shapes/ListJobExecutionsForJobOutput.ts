import { _JobExecutionSummaryForJobList } from "./_JobExecutionSummaryForJobList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobExecutionsForJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    executionSummaries: {
      shape: _JobExecutionSummaryForJobList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
