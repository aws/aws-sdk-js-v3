import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartWorkflowExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    runId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
