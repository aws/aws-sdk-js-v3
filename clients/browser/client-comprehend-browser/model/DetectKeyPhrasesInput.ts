import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectKeyPhrasesInput: _Structure_ = {
  type: "structure",
  required: ["Text", "LanguageCode"],
  members: {
    Text: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LanguageCode: {
      shape: {
        type: "string"
      }
    }
  }
};
