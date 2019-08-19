import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBSecurityGroupMembership: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBSecurityGroupName: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
