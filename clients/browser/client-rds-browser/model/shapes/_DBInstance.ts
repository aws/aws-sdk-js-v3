import { _Endpoint } from "./_Endpoint";
import { _DBSecurityGroupMembershipList } from "./_DBSecurityGroupMembershipList";
import { _VpcSecurityGroupMembershipList } from "./_VpcSecurityGroupMembershipList";
import { _DBParameterGroupStatusList } from "./_DBParameterGroupStatusList";
import { _DBSubnetGroup } from "./_DBSubnetGroup";
import { _PendingModifiedValues } from "./_PendingModifiedValues";
import { _ReadReplicaDBInstanceIdentifierList } from "./_ReadReplicaDBInstanceIdentifierList";
import { _ReadReplicaDBClusterIdentifierList } from "./_ReadReplicaDBClusterIdentifierList";
import { _OptionGroupMembershipList } from "./_OptionGroupMembershipList";
import { _DBInstanceStatusInfoList } from "./_DBInstanceStatusInfoList";
import { _DomainMembershipList } from "./_DomainMembershipList";
import { _LogTypeList } from "./_LogTypeList";
import { _ProcessorFeatureList } from "./_ProcessorFeatureList";
import { _DBInstanceRoles } from "./_DBInstanceRoles";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBInstanceClass: {
      shape: {
        type: "string"
      }
    },
    Engine: {
      shape: {
        type: "string"
      }
    },
    DBInstanceStatus: {
      shape: {
        type: "string"
      }
    },
    MasterUsername: {
      shape: {
        type: "string"
      }
    },
    DBName: {
      shape: {
        type: "string"
      }
    },
    Endpoint: {
      shape: _Endpoint
    },
    AllocatedStorage: {
      shape: {
        type: "integer"
      }
    },
    InstanceCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    PreferredBackupWindow: {
      shape: {
        type: "string"
      }
    },
    BackupRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    DBSecurityGroups: {
      shape: _DBSecurityGroupMembershipList
    },
    VpcSecurityGroups: {
      shape: _VpcSecurityGroupMembershipList
    },
    DBParameterGroups: {
      shape: _DBParameterGroupStatusList
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    DBSubnetGroup: {
      shape: _DBSubnetGroup
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    PendingModifiedValues: {
      shape: _PendingModifiedValues
    },
    LatestRestorableTime: {
      shape: {
        type: "timestamp"
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
    },
    AutoMinorVersionUpgrade: {
      shape: {
        type: "boolean"
      }
    },
    ReadReplicaSourceDBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    ReadReplicaDBInstanceIdentifiers: {
      shape: _ReadReplicaDBInstanceIdentifierList
    },
    ReadReplicaDBClusterIdentifiers: {
      shape: _ReadReplicaDBClusterIdentifierList
    },
    LicenseModel: {
      shape: {
        type: "string"
      }
    },
    Iops: {
      shape: {
        type: "integer"
      }
    },
    OptionGroupMemberships: {
      shape: _OptionGroupMembershipList
    },
    CharacterSetName: {
      shape: {
        type: "string"
      }
    },
    SecondaryAvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    PubliclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    StatusInfos: {
      shape: _DBInstanceStatusInfoList
    },
    StorageType: {
      shape: {
        type: "string"
      }
    },
    TdeCredentialArn: {
      shape: {
        type: "string"
      }
    },
    DbInstancePort: {
      shape: {
        type: "integer"
      }
    },
    DBClusterIdentifier: {
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
    DbiResourceId: {
      shape: {
        type: "string"
      }
    },
    CACertificateIdentifier: {
      shape: {
        type: "string"
      }
    },
    DomainMemberships: {
      shape: _DomainMembershipList
    },
    CopyTagsToSnapshot: {
      shape: {
        type: "boolean"
      }
    },
    MonitoringInterval: {
      shape: {
        type: "integer"
      }
    },
    EnhancedMonitoringResourceArn: {
      shape: {
        type: "string"
      }
    },
    MonitoringRoleArn: {
      shape: {
        type: "string"
      }
    },
    PromotionTier: {
      shape: {
        type: "integer"
      }
    },
    DBInstanceArn: {
      shape: {
        type: "string"
      }
    },
    Timezone: {
      shape: {
        type: "string"
      }
    },
    IAMDatabaseAuthenticationEnabled: {
      shape: {
        type: "boolean"
      }
    },
    PerformanceInsightsEnabled: {
      shape: {
        type: "boolean"
      }
    },
    PerformanceInsightsKMSKeyId: {
      shape: {
        type: "string"
      }
    },
    PerformanceInsightsRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    EnabledCloudwatchLogsExports: {
      shape: _LogTypeList
    },
    ProcessorFeatures: {
      shape: _ProcessorFeatureList
    },
    DeletionProtection: {
      shape: {
        type: "boolean"
      }
    },
    AssociatedRoles: {
      shape: _DBInstanceRoles
    },
    ListenerEndpoint: {
      shape: _Endpoint
    },
    MaxAllocatedStorage: {
      shape: {
        type: "integer"
      }
    }
  }
};
