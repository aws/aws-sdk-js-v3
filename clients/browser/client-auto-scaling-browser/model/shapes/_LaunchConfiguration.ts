import { _SecurityGroups } from "./_SecurityGroups";
import { _ClassicLinkVPCSecurityGroups } from "./_ClassicLinkVPCSecurityGroups";
import { _BlockDeviceMappings } from "./_BlockDeviceMappings";
import { _InstanceMonitoring } from "./_InstanceMonitoring";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchConfiguration: _Structure_ = {
  type: "structure",
  required: [
    "LaunchConfigurationName",
    "ImageId",
    "InstanceType",
    "CreatedTime"
  ],
  members: {
    LaunchConfigurationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LaunchConfigurationARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ImageId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    KeyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SecurityGroups: {
      shape: _SecurityGroups
    },
    ClassicLinkVPCId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClassicLinkVPCSecurityGroups: {
      shape: _ClassicLinkVPCSecurityGroups
    },
    UserData: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    KernelId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RamdiskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BlockDeviceMappings: {
      shape: _BlockDeviceMappings
    },
    InstanceMonitoring: {
      shape: _InstanceMonitoring
    },
    SpotPrice: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IamInstanceProfile: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      }
    },
    AssociatePublicIpAddress: {
      shape: {
        type: "boolean"
      }
    },
    PlacementTenancy: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
