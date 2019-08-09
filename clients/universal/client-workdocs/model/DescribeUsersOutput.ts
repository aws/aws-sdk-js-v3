import { _OrganizationUserList } from "./_OrganizationUserList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUsersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Users: {
      shape: _OrganizationUserList
    },
    TotalNumberOfUsers: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
