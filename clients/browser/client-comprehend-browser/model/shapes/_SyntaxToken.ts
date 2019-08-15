import { _PartOfSpeechTag } from "./_PartOfSpeechTag";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SyntaxToken: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TokenId: {
      shape: {
        type: "integer"
      }
    },
    Text: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BeginOffset: {
      shape: {
        type: "integer"
      }
    },
    EndOffset: {
      shape: {
        type: "integer"
      }
    },
    PartOfSpeech: {
      shape: _PartOfSpeechTag
    }
  }
};
