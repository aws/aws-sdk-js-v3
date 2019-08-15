import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDetectorInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    }
  }
};
