import { _DBSecurityGroupNameList } from "./_DBSecurityGroupNameList";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _CloudwatchLogsExportConfiguration } from "./_CloudwatchLogsExportConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBInstanceInput: _Structure_ = {
  type: "structure",
  required: ["DBInstanceIdentifier"],
  members: {
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
    DBSubnetGroupName: {
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
    ApplyImmediately: {
      shape: {
        type: "boolean"
      }
    },
    MasterUserPassword: {
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
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
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
    AllowMajorVersionUpgrade: {
      shape: {
        type: "boolean"
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
    NewDBInstanceIdentifier: {
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
    CACertificateIdentifier: {
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
    DBPortNumber: {
      shape: {
        type: "integer"
      }
    },
    PubliclyAccessible: {
      shape: {
        type: "boolean"
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
    CloudwatchLogsExportConfiguration: {
      shape: _CloudwatchLogsExportConfiguration
    }
  }
};
