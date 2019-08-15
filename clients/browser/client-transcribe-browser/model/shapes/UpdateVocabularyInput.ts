import { _Phrases } from "./_Phrases";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVocabularyInput: _Structure_ = {
  type: "structure",
  required: ["VocabularyName", "LanguageCode"],
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
    Phrases: {
      shape: _Phrases
    },
    VocabularyFileUri: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
