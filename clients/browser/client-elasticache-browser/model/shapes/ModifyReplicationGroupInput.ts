import { _CacheSecurityGroupNameList } from "./_CacheSecurityGroupNameList";
import { _SecurityGroupIdsList } from "./_SecurityGroupIdsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyReplicationGroupInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationGroupId"],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    ReplicationGroupDescription: {
      shape: {
        type: "string"
      }
    },
    PrimaryClusterId: {
      shape: {
        type: "string"
      }
    },
    SnapshottingClusterId: {
      shape: {
        type: "string"
      }
    },
    AutomaticFailoverEnabled: {
      shape: {
        type: "boolean"
      }
    },
    CacheSecurityGroupNames: {
      shape: _CacheSecurityGroupNameList
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIdsList
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    NotificationTopicArn: {
      shape: {
        type: "string"
      }
    },
    CacheParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    NotificationTopicStatus: {
      shape: {
        type: "string"
      }
    },
    ApplyImmediately: {
      shape: {
        type: "boolean"
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
    SnapshotRetentionLimit: {
      shape: {
        type: "integer"
      }
    },
    SnapshotWindow: {
      shape: {
        type: "string"
      }
    },
    CacheNodeType: {
      shape: {
        type: "string"
      }
    },
    NodeGroupId: {
      shape: {
        type: "string"
      }
    }
  }
};
