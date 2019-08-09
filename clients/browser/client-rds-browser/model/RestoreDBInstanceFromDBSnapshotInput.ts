import { _TagList } from "./_TagList";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _LogTypeList } from "./_LogTypeList";
import { _ProcessorFeatureList } from "./_ProcessorFeatureList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreDBInstanceFromDBSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["DBInstanceIdentifier", "DBSnapshotIdentifier"],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBInstanceClass: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
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
    MultiAZ: {
      shape: {
        type: "boolean"
      }
    },
    PubliclyAccessible: {
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
    DBName: {
      shape: {
        type: "string"
      }
    },
    Engine: {
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
    Tags: {
      shape: _TagList
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
    VpcSecurityGroupIds: {
      shape: _VpcSecurityGroupIdList
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
    DomainIAMRoleName: {
      shape: {
        type: "string"
      }
    },
    EnableIAMDatabaseAuthentication: {
      shape: {
        type: "boolean"
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
    DBParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    DeletionProtection: {
      shape: {
        type: "boolean"
      }
    }
  }
};
