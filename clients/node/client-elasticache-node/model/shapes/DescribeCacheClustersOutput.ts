import { _CacheClusterList } from "./_CacheClusterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheClustersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    CacheClusters: {
      shape: _CacheClusterList
    }
  }
};
