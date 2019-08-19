import { _Endpoint } from "./_Endpoint";
import { _PendingModifiedValues } from "./_PendingModifiedValues";
import { _NotificationConfiguration } from "./_NotificationConfiguration";
import { _CacheSecurityGroupMembershipList } from "./_CacheSecurityGroupMembershipList";
import { _CacheParameterGroupStatus } from "./_CacheParameterGroupStatus";
import { _CacheNodeList } from "./_CacheNodeList";
import { _SecurityGroupMembershipList } from "./_SecurityGroupMembershipList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheCluster: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    ConfigurationEndpoint: {
      shape: _Endpoint
    },
    ClientDownloadLandingPage: {
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
    CacheClusterStatus: {
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
    PendingModifiedValues: {
      shape: _PendingModifiedValues
    },
    NotificationConfiguration: {
      shape: _NotificationConfiguration
    },
    CacheSecurityGroups: {
      shape: _CacheSecurityGroupMembershipList
    },
    CacheParameterGroup: {
      shape: _CacheParameterGroupStatus
    },
    CacheSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    CacheNodes: {
      shape: _CacheNodeList
    },
    AutoMinorVersionUpgrade: {
      shape: {
        type: "boolean"
      }
    },
    SecurityGroups: {
      shape: _SecurityGroupMembershipList
    },
    ReplicationGroupId: {
      shape: {
        type: "string"
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
