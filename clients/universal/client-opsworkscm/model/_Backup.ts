import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Backup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupArn: {
      shape: {
        type: "string"
      }
    },
    BackupId: {
      shape: {
        type: "string"
      }
    },
    BackupType: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Engine: {
      shape: {
        type: "string"
      }
    },
    EngineModel: {
      shape: {
        type: "string"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    InstanceProfileArn: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    KeyPair: {
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
    S3DataSize: {
      shape: {
        type: "integer"
      }
    },
    S3DataUrl: {
      shape: {
        type: "string"
      }
    },
    S3LogUrl: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _Strings
    },
    ServerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceRoleArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusDescription: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _Strings
    },
    ToolsVersion: {
      shape: {
        type: "string"
      }
    },
    UserArn: {
      shape: {
        type: "string"
      }
    }
  }
};
