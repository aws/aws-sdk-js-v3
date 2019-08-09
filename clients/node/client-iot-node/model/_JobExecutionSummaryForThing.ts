import { _JobExecutionSummary } from "./_JobExecutionSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobExecutionSummaryForThing: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    jobExecutionSummary: {
      shape: _JobExecutionSummary
    }
  }
};
