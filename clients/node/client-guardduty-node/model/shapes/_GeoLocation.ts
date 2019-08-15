import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GeoLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Lat: {
      shape: {
        type: "float"
      },
      locationName: "lat"
    },
    Lon: {
      shape: {
        type: "float"
      },
      locationName: "lon"
    }
  }
};
