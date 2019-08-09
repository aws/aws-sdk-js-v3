import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteThreatIntelSetInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "ThreatIntelSetId"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
    ThreatIntelSetId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "threatIntelSetId"
    }
  }
};
