import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartJobRunOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobRunId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
