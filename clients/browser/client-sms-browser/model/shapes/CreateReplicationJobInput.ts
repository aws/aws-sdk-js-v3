import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateReplicationJobInput: _Structure_ = {
  type: "structure",
  required: ["serverId", "seedReplicationTime"],
  members: {
    serverId: {
      shape: {
        type: "string"
      }
    },
    seedReplicationTime: {
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
    roleName: {
      shape: {
        type: "string"
      }
    },
    description: {
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
