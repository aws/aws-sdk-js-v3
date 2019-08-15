import { _FindingStatisticTypes } from "./_FindingStatisticTypes";
import { _FindingCriteria } from "./_FindingCriteria";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFindingsStatisticsInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "FindingStatisticTypes"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
    FindingStatisticTypes: {
      shape: _FindingStatisticTypes,
      locationName: "findingStatisticTypes"
    },
    FindingCriteria: {
      shape: _FindingCriteria,
      locationName: "findingCriteria"
    }
  }
};
