import { _DBSecurityGroupNameList } from "./_DBSecurityGroupNameList";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _TagList } from "./_TagList";
import { _LogTypeList } from "./_LogTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBInstanceInput: _Structure_ = {
  type: "structure",
  required: ["DBInstanceIdentifier", "DBInstanceClass", "Engine"],
  members: {
    DBName: {
      shape: {
        type: "string"
      }
    },
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    AllocatedStorage: {
      shape: {
        type: "integer"
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
    MasterUsername: {
      shape: {
        type: "string"
      }
    },
    MasterUserPassword: {
      shape: {
        type: "string"
      }
    },
    DBSecurityGroups: {
      shape: _DBSecurityGroupNameList
    },
    VpcSecurityGroupIds: {
      shape: _VpcSecurityGroupIdList
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    DBSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    DBParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    BackupRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    PreferredBackupWindow: {
      shape: {
        type: "string"
      }
    },
    Port: {
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
    },
    AutoMinorVersionUpgrade: {
      shape: {
        type: "boolean"
      }
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
    OptionGroupName: {
      shape: {
        type: "string"
      }
    },
    CharacterSetName: {
      shape: {
        type: "string"
      }
    },
    PubliclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    Tags: {
      shape: _TagList
    },
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
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
    TdeCredentialPassword: {
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
    Domain: {
      shape: {
        type: "string"
      }
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
    MonitoringRoleArn: {
      shape: {
        type: "string"
      }
    },
    DomainIAMRoleName: {
      shape: {
        type: "string"
      }
    },
    PromotionTier: {
      shape: {
        type: "integer"
      }
    },
    Timezone: {
      shape: {
        type: "string"
      }
    },
    EnableIAMDatabaseAuthentication: {
      shape: {
        type: "boolean"
      }
    },
    EnablePerformanceInsights: {
      shape: {
        type: "boolean"
      }
    },
    PerformanceInsightsKMSKeyId: {
      shape: {
        type: "string"
      }
    },
    EnableCloudwatchLogsExports: {
      shape: _LogTypeList
    }
  }
};
