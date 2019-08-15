import { _HlsSettings } from "./_HlsSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsOutputSettings: _Structure_ = {
  type: "structure",
  required: ["HlsSettings"],
  members: {
    HlsSettings: {
      shape: _HlsSettings,
      locationName: "hlsSettings"
    },
    NameModifier: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "nameModifier"
    },
    SegmentModifier: {
      shape: {
        type: "string"
      },
      locationName: "segmentModifier"
    }
  }
};
