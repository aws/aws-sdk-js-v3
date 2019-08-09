import { _Endpoint } from "./_Endpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeGroupMember: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    CacheNodeId: {
      shape: {
        type: "string"
      }
    },
    ReadEndpoint: {
      shape: _Endpoint
    },
    PreferredAvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    CurrentRole: {
      shape: {
        type: "string"
      }
    }
  }
};
