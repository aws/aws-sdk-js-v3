import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListS3ResourcesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    memberAccountId: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
