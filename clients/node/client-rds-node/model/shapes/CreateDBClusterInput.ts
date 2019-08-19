import { _AvailabilityZones } from "./_AvailabilityZones";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _TagList } from "./_TagList";
import { _LogTypeList } from "./_LogTypeList";
import { _ScalingConfiguration } from "./_ScalingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBClusterInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterIdentifier", "Engine"],
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
    ReplicationSourceIdentifier: {
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
    PreSignedUrl: {
      shape: {
        type: "string"
      }
    },
    EnableIAMDatabaseAuthentication: {
      shape: {
        type: "boolean"
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
    EngineMode: {
      shape: {
        type: "string"
      }
    },
    ScalingConfiguration: {
      shape: _ScalingConfiguration
    },
    DeletionProtection: {
      shape: {
        type: "boolean"
      }
    },
    GlobalClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    CopyTagsToSnapshot: {
      shape: {
        type: "boolean"
      }
    }
  }
};
