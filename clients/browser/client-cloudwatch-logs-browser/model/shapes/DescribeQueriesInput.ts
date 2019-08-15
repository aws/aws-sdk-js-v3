import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeQueriesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
