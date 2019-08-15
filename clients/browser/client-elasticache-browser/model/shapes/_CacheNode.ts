import { _Endpoint } from "./_Endpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheNode: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheNodeId: {
      shape: {
        type: "string"
      }
    },
    CacheNodeStatus: {
      shape: {
        type: "string"
      }
    },
    CacheNodeCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    Endpoint: {
      shape: _Endpoint
    },
    ParameterGroupStatus: {
      shape: {
        type: "string"
      }
    },
    SourceCacheNodeId: {
      shape: {
        type: "string"
      }
    },
    CustomerAvailabilityZone: {
      shape: {
        type: "string"
      }
    }
  }
};
