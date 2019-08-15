import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MotionImageInsertionFramerate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FramerateDenominator: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "framerateDenominator"
    },
    FramerateNumerator: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "framerateNumerator"
    }
  }
};
