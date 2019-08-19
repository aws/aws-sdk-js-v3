import { _RestoreWindow } from "./_RestoreWindow";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBInstanceAutomatedBackup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBInstanceArn: {
      shape: {
        type: "string"
      }
    },
    DbiResourceId: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    RestoreWindow: {
      shape: _RestoreWindow
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
    StorageType: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
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
    }
  }
};
