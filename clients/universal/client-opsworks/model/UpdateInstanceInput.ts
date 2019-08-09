import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateInstanceInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    InstanceId: {
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
    Architecture: {
      shape: {
        type: "string"
      }
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
    }
  }
};
