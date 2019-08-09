import { _FrameCaptureSettings } from "./_FrameCaptureSettings";
import { _H264Settings } from "./_H264Settings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VideoCodecSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FrameCaptureSettings: {
      shape: _FrameCaptureSettings,
      locationName: "frameCaptureSettings"
    },
    H264Settings: {
      shape: _H264Settings,
      locationName: "h264Settings"
    }
  }
};
