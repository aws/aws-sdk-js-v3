import { _AccountsWithRestoreAccessList } from "./_AccountsWithRestoreAccessList";
import { _TagList } from "./_TagList";
import { _RestorableNodeTypeList } from "./_RestorableNodeTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Snapshot: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotCreateTime: {
      shape: {
        type: "timestamp"
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
    AvailabilityZone: {
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
    ClusterVersion: {
      shape: {
        type: "string"
      }
    },
    SnapshotType: {
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
    DBName: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    EncryptedWithHSM: {
      shape: {
        type: "boolean"
      }
    },
    AccountsWithRestoreAccess: {
      shape: _AccountsWithRestoreAccessList
    },
    OwnerAccount: {
      shape: {
        type: "string"
      }
    },
    TotalBackupSizeInMegaBytes: {
      shape: {
        type: "float"
      }
    },
    ActualIncrementalBackupSizeInMegaBytes: {
      shape: {
        type: "float"
      }
    },
    BackupProgressInMegaBytes: {
      shape: {
        type: "float"
      }
    },
    CurrentBackupRateInMegaBytesPerSecond: {
      shape: {
        type: "float"
      }
    },
    EstimatedSecondsToCompletion: {
      shape: {
        type: "integer"
      }
    },
    ElapsedTimeInSeconds: {
      shape: {
        type: "integer"
      }
    },
    SourceRegion: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    },
    RestorableNodeTypes: {
      shape: _RestorableNodeTypeList
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
    ManualSnapshotRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    ManualSnapshotRemainingDays: {
      shape: {
        type: "integer"
      }
    },
    SnapshotRetentionStartTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
