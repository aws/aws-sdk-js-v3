import { _AvailabilityZones } from "./_AvailabilityZones";
import { _DBClusterMemberList } from "./_DBClusterMemberList";
import { _VpcSecurityGroupMembershipList } from "./_VpcSecurityGroupMembershipList";
import { _DBClusterRoles } from "./_DBClusterRoles";
import { _LogTypeList } from "./_LogTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBCluster: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZones: {
      shape: _AvailabilityZones
    },
    BackupRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBClusterParameterGroup: {
      shape: {
        type: "string"
      }
    },
    DBSubnetGroup: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    PercentProgress: {
      shape: {
        type: "string"
      }
    },
    EarliestRestorableTime: {
      shape: {
        type: "timestamp"
      }
    },
    Endpoint: {
      shape: {
        type: "string"
      }
    },
    ReaderEndpoint: {
      shape: {
        type: "string"
      }
    },
    MultiAZ: {
      shape: {
        type: "boolean"
      }
    },
    Engine: {
      shape: {
        type: "string"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    LatestRestorableTime: {
      shape: {
        type: "timestamp"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    MasterUsername: {
      shape: {
        type: "string"
      }
    },
    PreferredBackupWindow: {
      shape: {
        type: "string"
      }
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    DBClusterMembers: {
      shape: _DBClusterMemberList
    },
    VpcSecurityGroups: {
      shape: _VpcSecurityGroupMembershipList
    },
    HostedZoneId: {
      shape: {
        type: "string"
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
    DbClusterResourceId: {
      shape: {
        type: "string"
      }
    },
    DBClusterArn: {
      shape: {
        type: "string"
      }
    },
    AssociatedRoles: {
      shape: _DBClusterRoles
    },
    ClusterCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    EnabledCloudwatchLogsExports: {
      shape: _LogTypeList
    },
    DeletionProtection: {
      shape: {
        type: "boolean"
      }
    }
  }
};
