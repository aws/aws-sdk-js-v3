import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryExecutionStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
    StateChangeReason: {
      shape: {
        type: "string"
      }
    },
    SubmissionDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    CompletionDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
