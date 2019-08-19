import { _ListReturnedArnList } from "./_ListReturnedArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssessmentRunsOutput: _Structure_ = {
  type: "structure",
  required: ["assessmentRunArns"],
  members: {
    assessmentRunArns: {
      shape: _ListReturnedArnList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
