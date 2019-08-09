import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PendingModifiedValues: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MasterUserPassword: {
      shape: {
        type: "string"
      }
    },
    NodeType: {
      shape: {
        type: "string"
      }
    },
    NumberOfNodes: {
      shape: {
        type: "integer"
      }
    },
    ClusterType: {
      shape: {
        type: "string"
      }
    },
    ClusterVersion: {
      shape: {
        type: "string"
      }
    },
    AutomatedSnapshotRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    PubliclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    EnhancedVpcRouting: {
      shape: {
        type: "boolean"
      }
    },
    MaintenanceTrackName: {
      shape: {
        type: "string"
      }
    },
    EncryptionType: {
      shape: {
        type: "string"
      }
    }
  }
};
