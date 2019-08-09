import { _SegmentList } from "./_SegmentList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Trace: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Duration: {
      shape: {
        type: "float"
      }
    },
    Segments: {
      shape: _SegmentList
    }
  }
};
