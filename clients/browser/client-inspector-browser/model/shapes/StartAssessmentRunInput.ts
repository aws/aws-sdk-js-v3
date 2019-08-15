import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartAssessmentRunInput: _Structure_ = {
  type: "structure",
  required: ["assessmentTemplateArn"],
  members: {
    assessmentTemplateArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    assessmentRunName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
