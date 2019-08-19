import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIdentityPoolsInput: _Structure_ = {
  type: "structure",
  required: ["MaxResults"],
  members: {
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
