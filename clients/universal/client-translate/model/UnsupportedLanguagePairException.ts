import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnsupportedLanguagePairException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    SourceLanguageCode: {
      shape: {
        type: "string",
        min: 2
      }
    },
    TargetLanguageCode: {
      shape: {
        type: "string",
        min: 2
      }
    }
  },
  exceptionType: "UnsupportedLanguagePairException"
};
