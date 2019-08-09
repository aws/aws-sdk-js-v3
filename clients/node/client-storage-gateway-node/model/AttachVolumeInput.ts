import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachVolumeInput: _Structure_ = {
  type: "structure",
  required: ["GatewayARN", "VolumeARN", "NetworkInterfaceId"],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    TargetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      }
    },
    DiskId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
