import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVocabularyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VocabularyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LanguageCode: {
      shape: {
        type: "string"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    VocabularyState: {
      shape: {
        type: "string"
      }
    }
  }
};
