import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCacheSecurityGroupInput: _Structure_ = {
  type: "structure",
  required: ["CacheSecurityGroupName", "Description"],
  members: {
    CacheSecurityGroupName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
