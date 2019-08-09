import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSnapshotFromVolumeRecoveryPointInput: _Structure_ = {
  type: "structure",
  required: ["VolumeARN", "SnapshotDescription"],
  members: {
    VolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    SnapshotDescription: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
