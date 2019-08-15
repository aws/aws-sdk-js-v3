import { _FindingCriteria } from "./_FindingCriteria";
import { _SortCriteria } from "./_SortCriteria";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListFindingsInput: _Structure_ = {
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
    FindingCriteria: {
      shape: _FindingCriteria,
      locationName: "findingCriteria"
    },
    SortCriteria: {
      shape: _SortCriteria,
      locationName: "sortCriteria"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
