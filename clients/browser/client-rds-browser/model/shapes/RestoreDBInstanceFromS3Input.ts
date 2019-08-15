import { _DBSecurityGroupNameList } from "./_DBSecurityGroupNameList";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _TagList } from "./_TagList";
import { _LogTypeList } from "./_LogTypeList";
import { _ProcessorFeatureList } from "./_ProcessorFeatureList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreDBInstanceFromS3Input: _Structure_ = {
  type: "structure",
  required: [
    "DBInstanceIdentifier",
    "DBInstanceClass",
    "Engine",
    "SourceEngine",
    "SourceEngineVersion",
    "S3BucketName",
    "S3IngestionRoleArn"
  ],
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
    PubliclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    Tags: {
      shape: _TagList
    },
    StorageType: {
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
    EnableIAMDatabaseAuthentication: {
      shape: {
        type: "boolean"
      }
    },
    SourceEngine: {
      shape: {
        type: "string"
      }
    },
    SourceEngineVersion: {
      shape: {
        type: "string"
      }
    },
    S3BucketName: {
      shape: {
        type: "string"
      }
    },
    S3Prefix: {
      shape: {
        type: "string"
      }
    },
    S3IngestionRoleArn: {
      shape: {
        type: "string"
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
    PerformanceInsightsRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    EnableCloudwatchLogsExports: {
      shape: _LogTypeList
    },
    ProcessorFeatures: {
      shape: _ProcessorFeatureList
    },
    UseDefaultProcessorFeatures: {
      shape: {
        type: "boolean"
      }
    },
    DeletionProtection: {
      shape: {
        type: "boolean"
      }
    }
  }
};
