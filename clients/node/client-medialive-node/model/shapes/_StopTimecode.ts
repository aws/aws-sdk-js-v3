import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StopTimecode: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LastFrameClippingBehavior: {
      shape: {
        type: "string"
      },
      locationName: "lastFrameClippingBehavior"
    },
    Timecode: {
      shape: {
        type: "string"
      },
      locationName: "timecode"
    }
  }
};
