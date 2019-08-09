import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTemplatesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxItems: {
      shape: {
        type: "integer"
      }
    }
  }
};
