import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchStopJobRunSuccessfulSubmission: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobRunId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
