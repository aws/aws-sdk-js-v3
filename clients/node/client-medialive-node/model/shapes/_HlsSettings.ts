import { _AudioOnlyHlsSettings } from "./_AudioOnlyHlsSettings";
import { _StandardHlsSettings } from "./_StandardHlsSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HlsSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioOnlyHlsSettings: {
      shape: _AudioOnlyHlsSettings,
      locationName: "audioOnlyHlsSettings"
    },
    StandardHlsSettings: {
      shape: _StandardHlsSettings,
      locationName: "standardHlsSettings"
    }
  }
};
