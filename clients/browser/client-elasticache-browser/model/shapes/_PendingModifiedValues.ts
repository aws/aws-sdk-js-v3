import { _CacheNodeIdsList } from "./_CacheNodeIdsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PendingModifiedValues: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NumCacheNodes: {
      shape: {
        type: "integer"
      }
    },
    CacheNodeIdsToRemove: {
      shape: _CacheNodeIdsList
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    CacheNodeType: {
      shape: {
        type: "string"
      }
    }
  }
};
