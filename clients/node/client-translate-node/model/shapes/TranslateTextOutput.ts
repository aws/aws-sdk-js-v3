import { _AppliedTerminologyList } from "./_AppliedTerminologyList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TranslateTextOutput: _Structure_ = {
  type: "structure",
  required: ["TranslatedText", "SourceLanguageCode", "TargetLanguageCode"],
  members: {
    TranslatedText: {
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
    },
    AppliedTerminologies: {
      shape: _AppliedTerminologyList
    }
  }
};
