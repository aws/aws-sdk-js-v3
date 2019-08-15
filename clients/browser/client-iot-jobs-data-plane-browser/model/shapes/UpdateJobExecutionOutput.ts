import { _JobExecutionState } from "./_JobExecutionState";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateJobExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    executionState: {
      shape: _JobExecutionState
    },
    jobDocument: {
      shape: {
        type: "string"
      }
    }
  }
};
