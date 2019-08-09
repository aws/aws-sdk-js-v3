import { _ListReturnedArnList } from "./_ListReturnedArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssessmentTargetsOutput: _Structure_ = {
  type: "structure",
  required: ["assessmentTargetArns"],
  members: {
    assessmentTargetArns: {
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
