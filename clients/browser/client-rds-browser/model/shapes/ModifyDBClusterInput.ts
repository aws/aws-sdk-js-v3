import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _CloudwatchLogsExportConfiguration } from "./_CloudwatchLogsExportConfiguration";
import { _ScalingConfiguration } from "./_ScalingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyDBClusterInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterIdentifier"],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    NewDBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    ApplyImmediately: {
      shape: {
        type: "boolean"
      }
    },
    BackupRetentionPeriod: {
      shape: {
        type: "integer"
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
    Port: {
      shape: {
        type: "integer"
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
    CloudwatchLogsExportConfiguration: {
      shape: _CloudwatchLogsExportConfiguration
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
    DBInstanceParameterGroupName: {
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
    EnableHttpEndpoint: {
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
