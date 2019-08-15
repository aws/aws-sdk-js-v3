import { _UserList } from "./_UserList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUsersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Users: {
      shape: _UserList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
