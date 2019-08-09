import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FrameCaptureSettings: _Structure_ = {
  type: "structure",
  required: ["CaptureInterval"],
  members: {
    CaptureInterval: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "captureInterval"
    }
  }
};
