import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProjectsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    sortBy: {
      shape: {
        type: "string"
      }
    },
    sortOrder: {
      shape: {
        type: "string"
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
