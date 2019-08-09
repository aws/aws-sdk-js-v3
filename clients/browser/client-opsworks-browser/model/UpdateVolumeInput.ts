import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVolumeInput: _Structure_ = {
  type: "structure",
  required: ["VolumeId"],
  members: {
    VolumeId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    MountPoint: {
      shape: {
        type: "string"
      }
    }
  }
};
