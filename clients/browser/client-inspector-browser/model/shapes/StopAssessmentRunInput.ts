import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopAssessmentRunInput: _Structure_ = {
  type: "structure",
  required: ["assessmentRunArn"],
  members: {
    assessmentRunArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    stopAction: {
      shape: {
        type: "string"
      }
    }
  }
};
