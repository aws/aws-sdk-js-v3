import { _RecencyDimension } from "./_RecencyDimension";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SegmentBehaviors: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Recency: {
      shape: _RecencyDimension
    }
  }
};
