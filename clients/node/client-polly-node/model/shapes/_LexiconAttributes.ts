import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LexiconAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Alphabet: {
      shape: {
        type: "string"
      }
    },
    LanguageCode: {
      shape: {
        type: "string"
      }
    },
    LastModified: {
      shape: {
        type: "timestamp"
      }
    },
    LexiconArn: {
      shape: {
        type: "string"
      }
    },
    LexemesCount: {
      shape: {
        type: "integer"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    }
  }
};
