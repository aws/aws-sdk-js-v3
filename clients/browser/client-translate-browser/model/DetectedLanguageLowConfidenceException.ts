import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectedLanguageLowConfidenceException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    DetectedLanguageCode: {
      shape: {
        type: "string",
        min: 2
      }
    }
  },
  exceptionType: "DetectedLanguageLowConfidenceException"
};
