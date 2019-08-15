import { _M3u8Settings } from "./_M3u8Settings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StandardHlsSettings: _Structure_ = {
  type: "structure",
  required: ["M3u8Settings"],
  members: {
    AudioRenditionSets: {
      shape: {
        type: "string"
      },
      locationName: "audioRenditionSets"
    },
    M3u8Settings: {
      shape: _M3u8Settings,
      locationName: "m3u8Settings"
    }
  }
};
