import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDetectorInput: _Structure_ = {
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
    },
    Enable: {
      shape: {
        type: "boolean"
      },
      locationName: "enable"
    },
    FindingPublishingFrequency: {
      shape: {
        type: "string"
      },
      locationName: "findingPublishingFrequency"
    }
  }
};
