import { _Strings } from "./_Strings";
import { _BlockDeviceMappings } from "./_BlockDeviceMappings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInstanceInput: _Structure_ = {
  type: "structure",
  required: ["StackId", "LayerIds", "InstanceType"],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    LayerIds: {
      shape: _Strings
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    AutoScalingType: {
      shape: {
        type: "string"
      }
    },
    Hostname: {
      shape: {
        type: "string"
      }
    },
    Os: {
      shape: {
        type: "string"
      }
    },
    AmiId: {
      shape: {
        type: "string"
      }
    },
    SshKeyName: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    VirtualizationType: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    Architecture: {
      shape: {
        type: "string"
      }
    },
    RootDeviceType: {
      shape: {
        type: "string"
      }
    },
    BlockDeviceMappings: {
      shape: _BlockDeviceMappings
    },
    InstallUpdatesOnBoot: {
      shape: {
        type: "boolean"
      }
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      }
    },
    AgentVersion: {
      shape: {
        type: "string"
      }
    },
    Tenancy: {
      shape: {
        type: "string"
      }
    }
  }
};
