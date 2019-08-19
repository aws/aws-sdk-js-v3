import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VideoDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HeightInPx: {
      shape: {
        type: "integer"
      },
      locationName: "heightInPx"
    },
    WidthInPx: {
      shape: {
        type: "integer"
      },
      locationName: "widthInPx"
    }
  }
};
