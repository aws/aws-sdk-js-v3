import { _BlockDeviceMappings } from "./_BlockDeviceMappings";
import { _Strings } from "./_Strings";
import { _ReportedOs } from "./_ReportedOs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Instance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AgentVersion: {
      shape: {
        type: "string"
      }
    },
    AmiId: {
      shape: {
        type: "string"
      }
    },
    Architecture: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    AutoScalingType: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    BlockDeviceMappings: {
      shape: _BlockDeviceMappings
    },
    CreatedAt: {
      shape: {
        type: "string"
      }
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      }
    },
    Ec2InstanceId: {
      shape: {
        type: "string"
      }
    },
    EcsClusterArn: {
      shape: {
        type: "string"
      }
    },
    EcsContainerInstanceArn: {
      shape: {
        type: "string"
      }
    },
    ElasticIp: {
      shape: {
        type: "string"
      }
    },
    Hostname: {
      shape: {
        type: "string"
      }
    },
    InfrastructureClass: {
      shape: {
        type: "string"
      }
    },
    InstallUpdatesOnBoot: {
      shape: {
        type: "boolean"
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    InstanceProfileArn: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    LastServiceErrorId: {
      shape: {
        type: "string"
      }
    },
    LayerIds: {
      shape: _Strings
    },
    Os: {
      shape: {
        type: "string"
      }
    },
    Platform: {
      shape: {
        type: "string"
      }
    },
    PrivateDns: {
      shape: {
        type: "string"
      }
    },
    PrivateIp: {
      shape: {
        type: "string"
      }
    },
    PublicDns: {
      shape: {
        type: "string"
      }
    },
    PublicIp: {
      shape: {
        type: "string"
      }
    },
    RegisteredBy: {
      shape: {
        type: "string"
      }
    },
    ReportedAgentVersion: {
      shape: {
        type: "string"
      }
    },
    ReportedOs: {
      shape: _ReportedOs
    },
    RootDeviceType: {
      shape: {
        type: "string"
      }
    },
    RootDeviceVolumeId: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupIds: {
      shape: _Strings
    },
    SshHostDsaKeyFingerprint: {
      shape: {
        type: "string"
      }
    },
    SshHostRsaKeyFingerprint: {
      shape: {
        type: "string"
      }
    },
    SshKeyName: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    Tenancy: {
      shape: {
        type: "string"
      }
    },
    VirtualizationType: {
      shape: {
        type: "string"
      }
    }
  }
};
