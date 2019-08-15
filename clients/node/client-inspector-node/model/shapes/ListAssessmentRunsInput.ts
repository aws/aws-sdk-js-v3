import { _ListParentArnList } from "./_ListParentArnList";
import { _AssessmentRunFilter } from "./_AssessmentRunFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssessmentRunsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    assessmentTemplateArns: {
      shape: _ListParentArnList
    },
    filter: {
      shape: _AssessmentRunFilter
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
