import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAssessmentRunInput: _Structure_ = {
  type: "structure",
  required: ["assessmentRunArn"],
  members: {
    assessmentRunArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
