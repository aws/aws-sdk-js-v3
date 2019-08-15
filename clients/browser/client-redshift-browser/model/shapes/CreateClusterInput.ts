import { _ClusterSecurityGroupNameList } from "./_ClusterSecurityGroupNameList";
import { _VpcSecurityGroupIdList } from "./_VpcSecurityGroupIdList";
import { _TagList } from "./_TagList";
import { _IamRoleArnList } from "./_IamRoleArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterInput: _Structure_ = {
  type: "structure",
  required: [
    "ClusterIdentifier",
    "NodeType",
    "MasterUsername",
    "MasterUserPassword"
  ],
  members: {
    DBName: {
      shape: {
        type: "string"
      }
    },
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
    MasterUsername: {
      shape: {
        type: "string"
      }
    },
    MasterUserPassword: {
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
    ClusterSubnetGroupName: {
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
    Port: {
      shape: {
        type: "integer"
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
