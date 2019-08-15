import { _GroupList } from "./_GroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUserGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupList: {
      shape: _GroupList
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
