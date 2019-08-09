import { _Users } from "./_Users";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Users: {
      shape: _Users
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
