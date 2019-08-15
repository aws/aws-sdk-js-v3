import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTagsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn"],
  members: {
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    resourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
