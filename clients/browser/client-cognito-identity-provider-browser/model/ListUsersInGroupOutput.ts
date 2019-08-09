import { _UsersListType } from "./_UsersListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsersInGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Users: {
      shape: _UsersListType
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
