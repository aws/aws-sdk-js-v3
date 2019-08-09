import { _AvailabilityZones } from "./_AvailabilityZones";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBClusterSnapshot: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZones: {
      shape: _AvailabilityZones
    },
    DBClusterSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    Engine: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    ClusterCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    MasterUsername: {
      shape: {
        type: "string"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    SnapshotType: {
      shape: {
        type: "string"
      }
    },
    PercentProgress: {
      shape: {
        type: "integer"
      }
    },
    StorageEncrypted: {
      shape: {
        type: "boolean"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    DBClusterSnapshotArn: {
      shape: {
        type: "string"
      }
    },
    SourceDBClusterSnapshotArn: {
      shape: {
        type: "string"
      }
    }
  }
};
