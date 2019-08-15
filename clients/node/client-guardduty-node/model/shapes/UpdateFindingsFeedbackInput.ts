import { _FindingIds } from "./_FindingIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFindingsFeedbackInput: _Structure_ = {
  type: "structure",
  required: ["DetectorId", "FindingIds", "Feedback"],
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
    Feedback: {
      shape: {
        type: "string"
      },
      locationName: "feedback"
    },
    Comments: {
      shape: {
        type: "string"
      },
      locationName: "comments"
    }
  }
};
