import { _FindingTypes } from "./_FindingTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSampleFindingsInput: _Structure_ = {
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
    FindingTypes: {
      shape: _FindingTypes,
      locationName: "findingTypes"
    }
  }
};
