import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCacheSecurityGroupInput: _Structure_ = {
  type: "structure",
  required: ["CacheSecurityGroupName"],
  members: {
    CacheSecurityGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
