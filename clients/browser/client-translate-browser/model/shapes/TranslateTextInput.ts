import { _ResourceNameList } from "./_ResourceNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TranslateTextInput: _Structure_ = {
  type: "structure",
  required: ["Text", "SourceLanguageCode", "TargetLanguageCode"],
  members: {
    Text: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TerminologyNames: {
      shape: _ResourceNameList
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
  }
};
