import { _PendingCloudwatchLogsExports } from "./_PendingCloudwatchLogsExports";
import { _ProcessorFeatureList } from "./_ProcessorFeatureList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PendingModifiedValues: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBInstanceClass: {
      shape: {
        type: "string"
      }
    },
    AllocatedStorage: {
      shape: {
        type: "integer"
      }
    },
    MasterUserPassword: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    BackupRetentionPeriod: {
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
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    StorageType: {
      shape: {
        type: "string"
      }
    },
    CACertificateIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    PendingCloudwatchLogsExports: {
      shape: _PendingCloudwatchLogsExports
    },
    ProcessorFeatures: {
      shape: _ProcessorFeatureList
    }
  }
};
