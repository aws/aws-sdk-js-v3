import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsersInput: _Structure_ = {
  type: "structure",
  required: ["ServerId"],
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
    },
    ServerId: {
      shape: {
        type: "string"
      }
    }
  }
};
