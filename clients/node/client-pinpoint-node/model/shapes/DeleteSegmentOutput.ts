import { _SegmentResponse } from "./_SegmentResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSegmentOutput: _Structure_ = {
  type: "structure",
  required: ["SegmentResponse"],
  members: {
    SegmentResponse: {
      shape: _SegmentResponse
    }
  },
  payload: "SegmentResponse"
};
