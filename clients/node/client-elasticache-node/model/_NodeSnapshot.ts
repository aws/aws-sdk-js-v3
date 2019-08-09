import { _NodeGroupConfiguration } from "./_NodeGroupConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeSnapshot: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    NodeGroupId: {
      shape: {
        type: "string"
      }
    },
    CacheNodeId: {
      shape: {
        type: "string"
      }
    },
    NodeGroupConfiguration: {
      shape: _NodeGroupConfiguration
    },
    CacheSize: {
      shape: {
        type: "string"
      }
    },
    CacheNodeCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    SnapshotCreateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
