import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsCaptionLanguageMapping: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CaptionChannel: {
      shape: {
        type: "integer",
        min: -2147483648
      },
      locationName: "captionChannel"
    },
    CustomLanguageCode: {
      shape: {
        type: "string",
        min: 3
      },
      locationName: "customLanguageCode"
    },
    LanguageCode: {
      shape: {
        type: "string"
      },
      locationName: "languageCode"
    },
    LanguageDescription: {
      shape: {
        type: "string"
      },
      locationName: "languageDescription"
    }
  }
};
