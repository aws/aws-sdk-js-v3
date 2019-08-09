import { _CaptionDestinationSettings } from "./_CaptionDestinationSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaptionDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CaptionSelectorName: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "captionSelectorName"
    },
    CustomLanguageCode: {
      shape: {
        type: "string",
        min: 3
      },
      locationName: "customLanguageCode"
    },
    DestinationSettings: {
      shape: _CaptionDestinationSettings,
      locationName: "destinationSettings"
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
