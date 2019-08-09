import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableVolumeIOInput: _Structure_ = {
  type: "structure",
  required: ["VolumeId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    VolumeId: {
      shape: {
        type: "string"
      },
      locationName: "volumeId"
    }
  }
};
