import { _EngineAttributes } from "./_EngineAttributes";
import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Server: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociatePublicIpAddress: {
      shape: {
        type: "boolean"
      }
    },
    BackupRetentionCount: {
      shape: {
        type: "integer"
      }
    },
    ServerName: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    CloudFormationStackArn: {
      shape: {
        type: "string"
      }
    },
    DisableAutomatedBackup: {
      shape: {
        type: "boolean"
      }
    },
    Endpoint: {
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
    EngineAttributes: {
      shape: _EngineAttributes
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
    MaintenanceStatus: {
      shape: {
        type: "string"
      }
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    PreferredBackupWindow: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _Strings
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
    StatusReason: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _Strings
    },
    ServerArn: {
      shape: {
        type: "string"
      }
    }
  }
};
