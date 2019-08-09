import { _NodeSnapshotList } from "./_NodeSnapshotList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Snapshot: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotName: {
      shape: {
        type: "string"
      }
    },
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
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    SnapshotStatus: {
      shape: {
        type: "string"
      }
    },
    SnapshotSource: {
      shape: {
        type: "string"
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
    NumCacheNodes: {
      shape: {
        type: "integer"
      }
    },
    PreferredAvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    CacheClusterCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer"
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
    VpcId: {
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
    NumNodeGroups: {
      shape: {
        type: "integer"
      }
    },
    AutomaticFailover: {
      shape: {
        type: "string"
      }
    },
    NodeSnapshots: {
      shape: _NodeSnapshotList
    }
  }
};
