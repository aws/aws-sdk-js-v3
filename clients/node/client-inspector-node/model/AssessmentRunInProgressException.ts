import { _AssessmentRunInProgressArnList } from "./_AssessmentRunInProgressArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssessmentRunInProgressException: _Structure_ = {
  type: "structure",
  required: [
    "message",
    "assessmentRunArns",
    "assessmentRunArnsTruncated",
    "canRetry"
  ],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    assessmentRunArns: {
      shape: _AssessmentRunInProgressArnList
    },
    assessmentRunArnsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    canRetry: {
      shape: {
        type: "boolean"
      }
    }
  },
  exceptionType: "AssessmentRunInProgressException"
};
