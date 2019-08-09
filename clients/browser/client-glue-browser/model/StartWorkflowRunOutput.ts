import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartWorkflowRunOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RunId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
