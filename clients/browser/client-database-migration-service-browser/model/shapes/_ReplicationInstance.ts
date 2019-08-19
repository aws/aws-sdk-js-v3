import { _VpcSecurityGroupMembershipList } from "./_VpcSecurityGroupMembershipList";
import { _ReplicationSubnetGroup } from "./_ReplicationSubnetGroup";
import { _ReplicationPendingModifiedValues } from "./_ReplicationPendingModifiedValues";
import { _ReplicationInstancePublicIpAddressList } from "./_ReplicationInstancePublicIpAddressList";
import { _ReplicationInstancePrivateIpAddressList } from "./_ReplicationInstancePrivateIpAddressList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstanceClass: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstanceStatus: {
      shape: {
        type: "string"
      }
    },
    AllocatedStorage: {
      shape: {
        type: "integer"
      }
    },
    InstanceCreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    VpcSecurityGroups: {
      shape: _VpcSecurityGroupMembershipList
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    ReplicationSubnetGroup: {
      shape: _ReplicationSubnetGroup
    },
    PreferredMaintenanceWindow: {
      shape: {
        type: "string"
      }
    },
    PendingModifiedValues: {
      shape: _ReplicationPendingModifiedValues
    },
    MultiAZ: {
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
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstanceArn: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstancePublicIpAddress: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstancePrivateIpAddress: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstancePublicIpAddresses: {
      shape: _ReplicationInstancePublicIpAddressList
    },
    ReplicationInstancePrivateIpAddresses: {
      shape: _ReplicationInstancePrivateIpAddressList
    },
    PubliclyAccessible: {
      shape: {
        type: "boolean"
      }
    },
    SecondaryAvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    FreeUntil: {
      shape: {
        type: "timestamp"
      }
    },
    DnsNameServers: {
      shape: {
        type: "string"
      }
    }
  }
};
