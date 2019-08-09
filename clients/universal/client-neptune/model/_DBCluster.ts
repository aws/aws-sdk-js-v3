import { _AvailabilityZones } from "./_AvailabilityZones";
import { _DBClusterOptionGroupMemberships } from "./_DBClusterOptionGroupMemberships";
import { _ReadReplicaIdentifierList } from "./_ReadReplicaIdentifierList";
import { _DBClusterMemberList } from "./_DBClusterMemberList";
import { _VpcSecurityGroupMembershipList } from "./_VpcSecurityGroupMembershipList";
import { _DBClusterRoles } from "./_DBClusterRoles";
import { _LogTypeList } from "./_LogTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBCluster: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllocatedStorage: {
      shape: {
        type: "integer"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZones
    },
    BackupRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    CharacterSetName: {
      shape: {
        type: "string"
      }
    },
    DatabaseName: {
      shape: {
        type: "string"
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
    DBClusterOptionGroupMemberships: {
      shape: _DBClusterOptionGroupMemberships
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
    ReplicationSourceIdentifier: {
      shape: {
        type: "string"
      }
    },
    ReadReplicaIdentifiers: {
      shape: _ReadReplicaIdentifierList
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
    IAMDatabaseAuthenticationEnabled: {
      shape: {
        type: "boolean"
      }
    },
    CloneGroupId: {
      shape: {
        type: "string"
      }
    },
    ClusterCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    EnabledCloudwatchLogsExports: {
      shape: _LogTypeList
    }
  }
};
