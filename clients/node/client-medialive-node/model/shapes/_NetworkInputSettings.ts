import { _HlsInputSettings } from "./_HlsInputSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInputSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HlsInputSettings: {
      shape: _HlsInputSettings,
      locationName: "hlsInputSettings"
    },
    ServerValidation: {
      shape: {
        type: "string"
      },
      locationName: "serverValidation"
    }
  }
};
