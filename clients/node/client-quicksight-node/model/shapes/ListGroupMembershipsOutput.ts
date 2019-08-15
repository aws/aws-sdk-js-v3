import { _GroupMemberList } from "./_GroupMemberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupMembershipsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupMemberList: {
      shape: _GroupMemberList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    RequestId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "integer"
      },
      location: "statusCode"
    }
  }
};
