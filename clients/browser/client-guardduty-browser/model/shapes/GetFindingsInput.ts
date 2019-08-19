import { _FindingIds } from "./_FindingIds";
import { _SortCriteria } from "./_SortCriteria";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFindingsInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "FindingIds"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
    FindingIds: {
      shape: _FindingIds,
      locationName: "findingIds"
    },
    SortCriteria: {
      shape: _SortCriteria,
      locationName: "sortCriteria"
    }
  }
};
