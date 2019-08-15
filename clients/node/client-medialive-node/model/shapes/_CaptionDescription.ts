import { _CaptionDestinationSettings } from "./_CaptionDestinationSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaptionDescription: _Structure_ = {
  type: "structure",
  required: ["CaptionSelectorName", "Name"],
  members: {
    CaptionSelectorName: {
      shape: {
        type: "string"
      },
      locationName: "captionSelectorName"
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
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    }
  }
};
