import { _FindingCriteria } from "./_FindingCriteria";
import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFilterInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "Name", "FindingCriteria"],
  members: {
    DetectorId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "detectorId"
    },
    Name: {
      shape: {
        type: "string",
        min: 3
      },
      locationName: "name"
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
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    Tags: {
      shape: _TagMap,
      locationName: "tags"
    }
  }
};
