import { _GPSCoordinates } from "./_GPSCoordinates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GPSPointDimension: _Structure_ = {
  type: "structure",
  required: ["Coordinates"],
  members: {
    Coordinates: {
      shape: _GPSCoordinates
    },
    RangeInKilometers: {
      shape: {
        type: "float"
      }
    }
  }
};
