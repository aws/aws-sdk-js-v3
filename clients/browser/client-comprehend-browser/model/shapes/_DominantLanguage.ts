import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DominantLanguage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LanguageCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Score: {
      shape: {
        type: "float"
      }
    }
  }
};
