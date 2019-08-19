import { _AssessmentTargetFilter } from "./_AssessmentTargetFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssessmentTargetsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    filter: {
      shape: _AssessmentTargetFilter
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
