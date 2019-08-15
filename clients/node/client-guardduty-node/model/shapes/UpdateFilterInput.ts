import { _FindingCriteria } from "./_FindingCriteria";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFilterInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "FilterName"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
    FilterName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "filterName"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Action: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "action"
    },
    Rank: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "rank"
    },
    FindingCriteria: {
      shape: _FindingCriteria,
      locationName: "findingCriteria"
    }
  }
};
