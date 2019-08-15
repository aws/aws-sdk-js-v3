import { _VideoSelectorSettings } from "./_VideoSelectorSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VideoSelector: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ColorSpace: {
      shape: {
        type: "string"
      },
      locationName: "colorSpace"
    },
    ColorSpaceUsage: {
      shape: {
        type: "string"
      },
      locationName: "colorSpaceUsage"
    },
    SelectorSettings: {
      shape: _VideoSelectorSettings,
      locationName: "selectorSettings"
    }
  }
};
