import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteCacheClusterInput: _Structure_ = {
  type: "structure",
  required: ["CacheClusterId"],
  members: {
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    FinalSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
