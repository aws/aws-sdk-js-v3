import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyReplicationInstanceInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationInstanceArn"],
  members: {
    ReplicationInstanceArn: {
      shape: {
        type: "string"
      }
    },
    AllocatedStorage: {
      shape: {
        type: "integer"
      }
    },
    ApplyImmediately: {
      shape: {
        type: "boolean"
      }
    },
    ReplicationInstanceClass: {
      shape: {
        type: "string"
      }
    },
    VpcSecurityGroupIds: {
      shape: _VpcSecurityGroupIdList
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
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
    AllowMajorVersionUpgrade: {
      shape: {
        type: "boolean"
      }
    },
    AutoMinorVersionUpgrade: {
      shape: {
        type: "boolean"
      }
    },
    ReplicationInstanceIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
