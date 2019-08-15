import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBuildsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    sortOrder: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
