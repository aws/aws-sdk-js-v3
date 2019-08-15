import { _GroupMember } from "./_GroupMember";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateGroupMembershipOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupMember: {
      shape: _GroupMember
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
