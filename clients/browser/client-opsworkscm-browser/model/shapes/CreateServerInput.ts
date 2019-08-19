import { _EngineAttributes } from "./_EngineAttributes";
import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateServerInput: _Structure_ = {
  type: "structure",
  required: [
    "ServerName",
    "InstanceProfileArn",
    "InstanceType",
    "ServiceRoleArn"
  ],
  members: {
    AssociatePublicIpAddress: {
      shape: {
        type: "boolean"
      }
    },
    DisableAutomatedBackup: {
      shape: {
        type: "boolean"
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
    EngineAttributes: {
      shape: _EngineAttributes
    },
    BackupRetentionCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ServerName: {
      shape: {
        type: "string",
        min: 1
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
    SubnetIds: {
      shape: _Strings
    },
    BackupId: {
      shape: {
        type: "string"
      }
    }
  }
};
