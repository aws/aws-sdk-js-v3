import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServerReplicationParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    seedTime: {
      shape: {
        type: "timestamp"
      }
    },
    frequency: {
      shape: {
        type: "integer"
      }
    },
    runOnce: {
      shape: {
        type: "boolean"
      }
    },
    licenseType: {
      shape: {
        type: "string"
      }
    },
    numberOfRecentAmisToKeep: {
      shape: {
        type: "integer"
      }
    },
    encrypted: {
      shape: {
        type: "boolean"
      }
    },
    kmsKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
