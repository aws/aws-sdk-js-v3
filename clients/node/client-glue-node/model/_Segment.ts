import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Segment: _Structure_ = {
  type: "structure",
  required: ["SegmentNumber", "TotalSegments"],
  members: {
    SegmentNumber: {
      shape: {
        type: "integer"
      }
    },
    TotalSegments: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
