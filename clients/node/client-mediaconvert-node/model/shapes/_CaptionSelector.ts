import { _CaptionSourceSettings } from "./_CaptionSourceSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaptionSelector: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    SourceSettings: {
      shape: _CaptionSourceSettings,
      locationName: "sourceSettings"
    }
  }
};
