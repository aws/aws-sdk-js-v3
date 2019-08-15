import { _CacheCluster } from "./_CacheCluster";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCacheClusterOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheCluster: {
      shape: _CacheCluster
    }
  }
};
