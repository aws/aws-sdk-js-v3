import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCacheParameterGroupInput: _Structure_ = {
  type: "structure",
  required: ["CacheParameterGroupName"],
  members: {
    CacheParameterGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
