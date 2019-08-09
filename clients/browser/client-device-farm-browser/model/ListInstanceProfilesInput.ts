import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInstanceProfilesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
