import { _ReplicationGroupPendingModifiedValues } from "./_ReplicationGroupPendingModifiedValues";
import { _ClusterIdList } from "./_ClusterIdList";
import { _NodeGroupList } from "./_NodeGroupList";
import { _Endpoint } from "./_Endpoint";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    PendingModifiedValues: {
      shape: _ReplicationGroupPendingModifiedValues
    },
    MemberClusters: {
      shape: _ClusterIdList
    },
    NodeGroups: {
      shape: _NodeGroupList
    },
    SnapshottingClusterId: {
      shape: {
        type: "string"
      }
    },
    AutomaticFailover: {
      shape: {
        type: "string"
      }
    },
    ConfigurationEndpoint: {
      shape: _Endpoint
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
    ClusterEnabled: {
      shape: {
        type: "boolean"
      }
    },
    CacheNodeType: {
      shape: {
        type: "string"
      }
    },
    AuthTokenEnabled: {
      shape: {
        type: "boolean"
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
