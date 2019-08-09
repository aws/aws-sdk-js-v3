import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCacheSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["CacheSubnetGroupName"],
  members: {
    CacheSubnetGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
