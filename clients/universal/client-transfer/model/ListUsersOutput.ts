import { _ListedUsers } from "./_ListedUsers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsersOutput: _Structure_ = {
  type: "structure",
  required: ["ServerId", "Users"],
  members: {
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
    },
    Users: {
      shape: _ListedUsers
    }
  }
};
