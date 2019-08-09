import { _Endpoint } from "./_Endpoint";
import { _VpcSecurityGroupMembershipList } from "./_VpcSecurityGroupMembershipList";
import { _DBSubnetGroup } from "./_DBSubnetGroup";
import { _PendingModifiedValues } from "./_PendingModifiedValues";
import { _DBInstanceStatusInfoList } from "./_DBInstanceStatusInfoList";
import { _LogTypeList } from "./_LogTypeList";
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
    Endpoint: {
      shape: _Endpoint
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
    VpcSecurityGroups: {
      shape: _VpcSecurityGroupMembershipList
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
    PubliclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    StatusInfos: {
      shape: _DBInstanceStatusInfoList
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
    EnabledCloudwatchLogsExports: {
      shape: _LogTypeList
    }
  }
};
