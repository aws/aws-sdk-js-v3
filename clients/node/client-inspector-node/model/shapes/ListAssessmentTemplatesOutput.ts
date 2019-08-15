import { _ListReturnedArnList } from "./_ListReturnedArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssessmentTemplatesOutput: _Structure_ = {
  type: "structure",
  required: ["assessmentTemplateArns"],
  members: {
    assessmentTemplateArns: {
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
