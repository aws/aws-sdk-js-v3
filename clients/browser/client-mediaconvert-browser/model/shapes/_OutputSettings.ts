import { _HlsSettings } from "./_HlsSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HlsSettings: {
      shape: _HlsSettings,
      locationName: "hlsSettings"
    }
  }
};
