import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcSecurityGroupMembership: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcSecurityGroupId: {
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
