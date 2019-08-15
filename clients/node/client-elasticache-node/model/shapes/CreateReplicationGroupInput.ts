import { _AvailabilityZonesList } from "./_AvailabilityZonesList";
import { _NodeGroupConfigurationList } from "./_NodeGroupConfigurationList";
import { _CacheSecurityGroupNameList } from "./_CacheSecurityGroupNameList";
import { _SecurityGroupIdsList } from "./_SecurityGroupIdsList";
import { _TagList } from "./_TagList";
import { _SnapshotArnsList } from "./_SnapshotArnsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateReplicationGroupInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationGroupId", "ReplicationGroupDescription"],
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
    AutomaticFailoverEnabled: {
      shape: {
        type: "boolean"
      }
    },
    NumCacheClusters: {
      shape: {
        type: "integer"
      }
    },
    PreferredCacheClusterAZs: {
      shape: _AvailabilityZonesList
    },
    NumNodeGroups: {
      shape: {
        type: "integer"
      }
    },
    ReplicasPerNodeGroup: {
      shape: {
        type: "integer"
      }
    },
    NodeGroupConfiguration: {
      shape: _NodeGroupConfigurationList
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
    },
    TransitEncryptionEnabled: {
      shape: {
        type: "boolean"
      }
    },
    AtRestEncryptionEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
