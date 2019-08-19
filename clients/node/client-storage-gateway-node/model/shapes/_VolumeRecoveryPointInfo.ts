import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeRecoveryPointInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    VolumeSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    VolumeUsageInBytes: {
      shape: {
        type: "integer"
      }
    },
    VolumeRecoveryPointTime: {
      shape: {
        type: "string"
      }
    }
  }
};
