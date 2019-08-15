import { _ProcessorFeatureList } from "./_ProcessorFeatureList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBSnapshot: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    Engine: {
      shape: {
        type: "string"
      }
    },
    AllocatedStorage: {
      shape: {
        type: "integer"
      }
    },
    Status: {
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
    VpcId: {
      shape: {
        type: "string"
      }
    },
    InstanceCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    MasterUsername: {
      shape: {
        type: "string"
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
    SnapshotType: {
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
    PercentProgress: {
      shape: {
        type: "integer"
      }
    },
    SourceRegion: {
      shape: {
        type: "string"
      }
    },
    SourceDBSnapshotIdentifier: {
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
    Encrypted: {
      shape: {
        type: "boolean"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    DBSnapshotArn: {
      shape: {
        type: "string"
      }
    },
    Timezone: {
      shape: {
        type: "string"
      }
    },
    IAMDatabaseAuthenticationEnabled: {
      shape: {
        type: "boolean"
      }
    },
    ProcessorFeatures: {
      shape: _ProcessorFeatureList
    },
    DbiResourceId: {
      shape: {
        type: "string"
      }
    }
  }
};
