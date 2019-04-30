import { _SegmentsResponse } from "./_SegmentsResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSegmentsOutput: _Structure_ = {
  type: "structure",
  required: ["SegmentsResponse"],
  members: {
    SegmentsResponse: {
      shape: _SegmentsResponse
    }
  },
  payload: "SegmentsResponse"
};
