import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachVolumeInput: _Structure_ = {
  type: "structure",
  required: ["VolumeARN"],
  members: {
    VolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    ForceDetach: {
      shape: {
        type: "boolean"
      }
    }
  }
};
