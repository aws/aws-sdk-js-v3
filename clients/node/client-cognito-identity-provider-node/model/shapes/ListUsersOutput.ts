import { _UsersListType } from "./_UsersListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Users: {
      shape: _UsersListType
    },
    PaginationToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
