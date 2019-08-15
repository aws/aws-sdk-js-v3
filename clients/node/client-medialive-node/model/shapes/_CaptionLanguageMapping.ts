import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaptionLanguageMapping: _Structure_ = {
  type: "structure",
  required: ["LanguageCode", "LanguageDescription", "CaptionChannel"],
  members: {
    CaptionChannel: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "captionChannel"
    },
    LanguageCode: {
      shape: {
        type: "string",
        min: 3
      },
      locationName: "languageCode"
    },
    LanguageDescription: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "languageDescription"
    }
  }
};
