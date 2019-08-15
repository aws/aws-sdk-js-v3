import { _Endpoint } from "./_Endpoint";
import { _ClusterSecurityGroupMembershipList } from "./_ClusterSecurityGroupMembershipList";
import { _VpcSecurityGroupMembershipList } from "./_VpcSecurityGroupMembershipList";
import { _ClusterParameterGroupStatusList } from "./_ClusterParameterGroupStatusList";
import { _PendingModifiedValues } from "./_PendingModifiedValues";
import { _RestoreStatus } from "./_RestoreStatus";
import { _DataTransferProgress } from "./_DataTransferProgress";
import { _HsmStatus } from "./_HsmStatus";
import { _ClusterSnapshotCopyStatus } from "./_ClusterSnapshotCopyStatus";
import { _ClusterNodesList } from "./_ClusterNodesList";
import { _ElasticIpStatus } from "./_ElasticIpStatus";
import { _TagList } from "./_TagList";
import { _ClusterIamRoleList } from "./_ClusterIamRoleList";
import { _PendingActionsList } from "./_PendingActionsList";
import { _DeferredMaintenanceWindowsList } from "./_DeferredMaintenanceWindowsList";
import { _ResizeInfo } from "./_ResizeInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Cluster: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    NodeType: {
      shape: {
        type: "string"
      }
    },
    ClusterStatus: {
      shape: {
        type: "string"
      }
    },
    ClusterAvailabilityStatus: {
      shape: {
        type: "string"
      }
    },
    ModifyStatus: {
      shape: {
        type: "string"
      }
    },
    MasterUsername: {
      shape: {
        type: "string"
      }
    },
    DBName: {
      shape: {
        type: "string"
      }
    },
    Endpoint: {
      shape: _Endpoint
    },
    ClusterCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    AutomatedSnapshotRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    ManualSnapshotRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    ClusterSecurityGroups: {
      shape: _ClusterSecurityGroupMembershipList
    },
    VpcSecurityGroups: {
      shape: _VpcSecurityGroupMembershipList
    },
    ClusterParameterGroups: {
      shape: _ClusterParameterGroupStatusList
    },
    ClusterSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
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
    ClusterVersion: {
      shape: {
        type: "string"
      }
    },
    AllowVersionUpgrade: {
      shape: {
        type: "boolean"
      }
    },
    NumberOfNodes: {
      shape: {
        type: "integer"
      }
    },
    PubliclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    },
    RestoreStatus: {
      shape: _RestoreStatus
    },
    DataTransferProgress: {
      shape: _DataTransferProgress
    },
    HsmStatus: {
      shape: _HsmStatus
    },
    ClusterSnapshotCopyStatus: {
      shape: _ClusterSnapshotCopyStatus
    },
    ClusterPublicKey: {
      shape: {
        type: "string"
      }
    },
    ClusterNodes: {
      shape: _ClusterNodesList
    },
    ElasticIpStatus: {
      shape: _ElasticIpStatus
    },
    ClusterRevisionNumber: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    EnhancedVpcRouting: {
      shape: {
        type: "boolean"
      }
    },
    IamRoles: {
      shape: _ClusterIamRoleList
    },
    PendingActions: {
      shape: _PendingActionsList
    },
    MaintenanceTrackName: {
      shape: {
        type: "string"
      }
    },
    ElasticResizeNumberOfNodeOptions: {
      shape: {
        type: "string"
      }
    },
    DeferredMaintenanceWindows: {
      shape: _DeferredMaintenanceWindowsList
    },
    SnapshotScheduleIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotScheduleState: {
      shape: {
        type: "string"
      }
    },
    ResizeInfo: {
      shape: _ResizeInfo
    }
  }
};
