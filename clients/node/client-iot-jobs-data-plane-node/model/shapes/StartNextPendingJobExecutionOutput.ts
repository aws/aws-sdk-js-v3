import { _JobExecution } from "./_JobExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartNextPendingJobExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    execution: {
      shape: _JobExecution
    }
  }
};
