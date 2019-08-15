import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVolumeInput: _Structure_ = {
  type: "structure",
  required: ["VolumeId"],
  members: {
    VolumeId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
