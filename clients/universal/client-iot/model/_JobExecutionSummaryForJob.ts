import { _JobExecutionSummary } from "./_JobExecutionSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobExecutionSummaryForJob: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    thingArn: {
      shape: {
        type: "string"
      }
    },
    jobExecutionSummary: {
      shape: _JobExecutionSummary
    }
  }
};
