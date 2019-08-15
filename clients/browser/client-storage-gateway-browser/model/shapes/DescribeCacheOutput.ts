import { _DiskIds } from "./_DiskIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    DiskIds: {
      shape: _DiskIds
    },
    CacheAllocatedInBytes: {
      shape: {
        type: "integer"
      }
    },
    CacheUsedPercentage: {
      shape: {
        type: "float"
      }
    },
    CacheDirtyPercentage: {
      shape: {
        type: "float"
      }
    },
    CacheHitPercentage: {
      shape: {
        type: "float"
      }
    },
    CacheMissPercentage: {
      shape: {
        type: "float"
      }
    }
  }
};
