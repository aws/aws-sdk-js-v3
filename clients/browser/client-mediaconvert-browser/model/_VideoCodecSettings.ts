import { _FrameCaptureSettings } from "./_FrameCaptureSettings";
import { _H264Settings } from "./_H264Settings";
import { _H265Settings } from "./_H265Settings";
import { _Mpeg2Settings } from "./_Mpeg2Settings";
import { _ProresSettings } from "./_ProresSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VideoCodecSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Codec: {
      shape: {
        type: "string"
      },
      locationName: "codec"
    },
    FrameCaptureSettings: {
      shape: _FrameCaptureSettings,
      locationName: "frameCaptureSettings"
    },
    H264Settings: {
      shape: _H264Settings,
      locationName: "h264Settings"
    },
    H265Settings: {
      shape: _H265Settings,
      locationName: "h265Settings"
    },
    Mpeg2Settings: {
      shape: _Mpeg2Settings,
      locationName: "mpeg2Settings"
    },
    ProresSettings: {
      shape: _ProresSettings,
      locationName: "proresSettings"
    }
  }
};
