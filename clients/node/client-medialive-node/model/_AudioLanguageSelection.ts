import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioLanguageSelection: _Structure_ = {
  type: "structure",
  required: ["LanguageCode"],
  members: {
    LanguageCode: {
      shape: {
        type: "string"
      },
      locationName: "languageCode"
    },
    LanguageSelectionPolicy: {
      shape: {
        type: "string"
      },
      locationName: "languageSelectionPolicy"
    }
  }
};
