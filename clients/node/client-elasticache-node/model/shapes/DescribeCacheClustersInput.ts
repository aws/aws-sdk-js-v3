import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheClustersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    ShowCacheNodeInfo: {
      shape: {
        type: "boolean"
      }
    },
    ShowCacheClustersNotInReplicationGroups: {
      shape: {
        type: "boolean"
      }
    }
  }
};
