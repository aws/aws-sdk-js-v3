import { _CaptionSelectorSettings } from "./_CaptionSelectorSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CaptionSelector: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    LanguageCode: {
      shape: {
        type: "string"
      },
      locationName: "languageCode"
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "name"
    },
    SelectorSettings: {
      shape: _CaptionSelectorSettings,
      locationName: "selectorSettings"
    }
  }
};
