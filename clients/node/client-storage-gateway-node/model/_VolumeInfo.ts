import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    VolumeId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    GatewayId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    VolumeType: {
      shape: {
        type: "string",
        min: 3
      }
    },
    VolumeSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    VolumeAttachmentStatus: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
