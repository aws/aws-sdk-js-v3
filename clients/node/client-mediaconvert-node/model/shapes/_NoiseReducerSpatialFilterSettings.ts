import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NoiseReducerSpatialFilterSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PostFilterSharpenStrength: {
      shape: {
        type: "integer"
      },
      locationName: "postFilterSharpenStrength"
    },
    Speed: {
      shape: {
        type: "integer",
        min: -2
      },
      locationName: "speed"
    },
    Strength: {
      shape: {
        type: "integer"
      },
      locationName: "strength"
    }
  }
};
