import { _ClusterSecurityGroupNameList } from "./_ClusterSecurityGroupNameList";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _IamRoleArnList } from "./_IamRoleArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreFromClusterSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier", "SnapshotIdentifier"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    Port: {
      shape: {
        type: "integer"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    AllowVersionUpgrade: {
      shape: {
        type: "boolean"
      }
    },
    ClusterSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    PubliclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    OwnerAccount: {
      shape: {
        type: "string"
      }
    },
    HsmClientCertificateIdentifier: {
      shape: {
        type: "string"
      }
    },
    HsmConfigurationIdentifier: {
      shape: {
        type: "string"
      }
    },
    ElasticIp: {
      shape: {
        type: "string"
      }
    },
    ClusterParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    ClusterSecurityGroups: {
      shape: _ClusterSecurityGroupNameList
    },
    VpcSecurityGroupIds: {
      shape: _VpcSecurityGroupIdList
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
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
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    NodeType: {
      shape: {
        type: "string"
      }
    },
    EnhancedVpcRouting: {
      shape: {
        type: "boolean"
      }
    },
    AdditionalInfo: {
      shape: {
        type: "string"
      }
    },
    IamRoles: {
      shape: _IamRoleArnList
    },
    MaintenanceTrackName: {
      shape: {
        type: "string"
      }
    },
    SnapshotScheduleIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
