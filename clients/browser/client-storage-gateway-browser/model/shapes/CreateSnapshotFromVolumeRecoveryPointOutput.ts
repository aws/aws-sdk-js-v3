import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSnapshotFromVolumeRecoveryPointOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotId: {
      shape: {
        type: "string"
      }
    },
    VolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    VolumeRecoveryPointTime: {
      shape: {
        type: "string"
      }
    }
  }
};
