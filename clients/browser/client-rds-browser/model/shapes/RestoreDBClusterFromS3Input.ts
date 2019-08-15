import { _AvailabilityZones } from "./_AvailabilityZones";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _TagList } from "./_TagList";
import { _LogTypeList } from "./_LogTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreDBClusterFromS3Input: _Structure_ = {
  type: "structure",
  required: [
    "DBClusterIdentifier",
    "Engine",
    "MasterUsername",
    "MasterUserPassword",
    "SourceEngine",
    "SourceEngineVersion",
    "S3BucketName",
    "S3IngestionRoleArn"
  ],
  members: {
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
    DBClusterParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    VpcSecurityGroupIds: {
      shape: _VpcSecurityGroupIdList
    },
    DBSubnetGroupName: {
      shape: {
        type: "string"
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
    MasterUserPassword: {
      shape: {
        type: "string"
      }
    },
    OptionGroupName: {
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
    Tags: {
      shape: _TagList
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
    BacktrackWindow: {
      shape: {
        type: "integer"
      }
    },
    EnableCloudwatchLogsExports: {
      shape: _LogTypeList
    },
    DeletionProtection: {
      shape: {
        type: "boolean"
      }
    },
    CopyTagsToSnapshot: {
      shape: {
        type: "boolean"
      }
    }
  }
};
