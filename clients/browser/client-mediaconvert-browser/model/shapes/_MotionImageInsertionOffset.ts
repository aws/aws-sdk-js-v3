import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MotionImageInsertionOffset: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImageX: {
      shape: {
        type: "integer"
      },
      locationName: "imageX"
    },
    ImageY: {
      shape: {
        type: "integer"
      },
      locationName: "imageY"
    }
  }
};
