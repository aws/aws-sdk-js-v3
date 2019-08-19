import { _ZoneAwarenessConfig } from "./_ZoneAwarenessConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ElasticsearchClusterConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    DedicatedMasterEnabled: {
      shape: {
        type: "boolean"
      }
    },
    ZoneAwarenessEnabled: {
      shape: {
        type: "boolean"
      }
    },
    ZoneAwarenessConfig: {
      shape: _ZoneAwarenessConfig
    },
    DedicatedMasterType: {
      shape: {
        type: "string"
      }
    },
    DedicatedMasterCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
