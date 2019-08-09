import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationPendingModifiedValues: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationInstanceClass: {
      shape: {
        type: "string"
      }
    },
    AllocatedStorage: {
      shape: {
        type: "integer"
      }
    },
    MultiAZ: {
      shape: {
        type: "boolean"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
