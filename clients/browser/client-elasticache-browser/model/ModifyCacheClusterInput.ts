import { _CacheNodeIdsList } from "./_CacheNodeIdsList";
import { _PreferredAvailabilityZoneList } from "./_PreferredAvailabilityZoneList";
import { _CacheSecurityGroupNameList } from "./_CacheSecurityGroupNameList";
import { _SecurityGroupIdsList } from "./_SecurityGroupIdsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyCacheClusterInput: _Structure_ = {
  type: "structure",
  required: ["CacheClusterId"],
  members: {
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    NumCacheNodes: {
      shape: {
        type: "integer"
      }
    },
    CacheNodeIdsToRemove: {
      shape: _CacheNodeIdsList
    },
    AZMode: {
      shape: {
        type: "string"
      }
    },
    NewAvailabilityZones: {
      shape: _PreferredAvailabilityZoneList
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
    }
  }
};
