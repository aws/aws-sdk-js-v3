import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListExclusionsInput: _Structure_ = {
  type: "structure",
  required: ["assessmentRunArn"],
  members: {
    assessmentRunArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
