import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobRunsInput: _Structure_ = {
  type: "structure",
  required: ["JobName"],
  members: {
    JobName: {
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
