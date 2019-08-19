import { _CacheNodeIdsList } from "./_CacheNodeIdsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RebootCacheClusterInput: _Structure_ = {
  type: "structure",
  required: ["CacheClusterId", "CacheNodeIdsToReboot"],
  members: {
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    CacheNodeIdsToReboot: {
      shape: _CacheNodeIdsList
    }
  }
};
