import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateReplicationJobInput: _Structure_ = {
  type: "structure",
  required: ["replicationJobId"],
  members: {
    replicationJobId: {
      shape: {
        type: "string"
      }
    },
    frequency: {
      shape: {
        type: "integer"
      }
    },
    nextReplicationRunStartTime: {
      shape: {
        type: "timestamp"
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
