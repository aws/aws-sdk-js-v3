import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GPSCoordinates: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Latitude: {
      shape: {
        type: "float"
      }
    },
    Longitude: {
      shape: {
        type: "float"
      }
    }
  }
};
