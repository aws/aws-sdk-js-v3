import { _AudioSelectorSettings } from "./_AudioSelectorSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioSelector: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "name"
    },
    SelectorSettings: {
      shape: _AudioSelectorSettings,
      locationName: "selectorSettings"
    }
  }
};
