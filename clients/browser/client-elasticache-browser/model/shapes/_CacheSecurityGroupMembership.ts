import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheSecurityGroupMembership: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheSecurityGroupName: {
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
