import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDatasetGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
