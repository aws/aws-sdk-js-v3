import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTranscriptionJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    JobNameContains: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
