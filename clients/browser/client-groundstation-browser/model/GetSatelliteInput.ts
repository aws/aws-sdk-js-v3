import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSatelliteInput: _Structure_ = {
  type: "structure",
  required: ["satelliteId"],
  members: {
    satelliteId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "satelliteId"
    }
  }
};
