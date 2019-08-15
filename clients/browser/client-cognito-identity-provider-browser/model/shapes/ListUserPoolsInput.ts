import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUserPoolsInput: _Structure_ = {
  type: "structure",
  required: ["MaxResults"],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
