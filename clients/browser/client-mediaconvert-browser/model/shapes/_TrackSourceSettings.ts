import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrackSourceSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrackNumber: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "trackNumber"
    }
  }
};
