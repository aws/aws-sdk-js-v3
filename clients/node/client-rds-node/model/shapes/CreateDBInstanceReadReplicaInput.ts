import { _TagList } from "./_TagList";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _LogTypeList } from "./_LogTypeList";
import { _ProcessorFeatureList } from "./_ProcessorFeatureList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBInstanceReadReplicaInput: _Structure_ = {
  type: "structure",
  required: ["DBInstanceIdentifier", "SourceDBInstanceIdentifier"],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    SourceDBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBInstanceClass: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
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
    AutoMinorVersionUpgrade: {
      shape: {
        type: "boolean"
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
    DBSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    VpcSecurityGroupIds: {
      shape: _VpcSecurityGroupIdList
    },
    StorageType: {
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
