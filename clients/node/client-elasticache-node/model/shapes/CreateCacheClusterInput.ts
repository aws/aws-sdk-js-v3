import { _PreferredAvailabilityZoneList } from "./_PreferredAvailabilityZoneList";
import { _CacheSecurityGroupNameList } from "./_CacheSecurityGroupNameList";
import { _SecurityGroupIdsList } from "./_SecurityGroupIdsList";
import { _TagList } from "./_TagList";
import { _SnapshotArnsList } from "./_SnapshotArnsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCacheClusterInput: _Structure_ = {
  type: "structure",
  required: ["CacheClusterId"],
  members: {
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    AZMode: {
      shape: {
        type: "string"
      }
    },
    PreferredAvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    PreferredAvailabilityZones: {
      shape: _PreferredAvailabilityZoneList
    },
    NumCacheNodes: {
      shape: {
        type: "integer"
      }
    },
    CacheNodeType: {
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
    CacheParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    CacheSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    CacheSecurityGroupNames: {
      shape: _CacheSecurityGroupNameList
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIdsList
    },
    Tags: {
      shape: _TagList
    },
    SnapshotArns: {
      shape: _SnapshotArnsList
    },
    SnapshotName: {
      shape: {
        type: "string"
      }
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    NotificationTopicArn: {
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
    AuthToken: {
      shape: {
        type: "string"
      }
    }
  }
};
