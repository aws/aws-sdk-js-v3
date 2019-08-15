import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobBookmarksInput: _Structure_ = {
  type: "structure",
  required: ["JobName"],
  members: {
    JobName: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "integer"
      }
    }
  }
};
