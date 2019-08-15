import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetExecutionHistoryInput: _Structure_ = {
  type: "structure",
  required: ["executionArn"],
  members: {
    executionArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    reverseOrder: {
      shape: {
        type: "boolean"
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
