import { _ClusterSecurityGroupNameList } from "./_ClusterSecurityGroupNameList";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyClusterInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    ClusterType: {
      shape: {
        type: "string"
      }
    },
    NodeType: {
      shape: {
        type: "string"
      }
    },
    NumberOfNodes: {
      shape: {
        type: "integer"
      }
    },
    ClusterSecurityGroups: {
      shape: _ClusterSecurityGroupNameList
    },
    VpcSecurityGroupIds: {
      shape: _VpcSecurityGroupIdList
    },
    MasterUserPassword: {
      shape: {
        type: "string"
      }
    },
    ClusterParameterGroupName: {
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
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
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
    NewClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    PubliclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    ElasticIp: {
      shape: {
        type: "string"
      }
    },
    EnhancedVpcRouting: {
      shape: {
        type: "boolean"
      }
    },
    MaintenanceTrackName: {
      shape: {
        type: "string"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
