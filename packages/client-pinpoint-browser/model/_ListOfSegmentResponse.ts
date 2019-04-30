import { List as _List_ } from "@aws-sdk/types";
import { _SegmentResponse } from "./_SegmentResponse";

export const _ListOfSegmentResponse: _List_ = {
  type: "list",
  member: {
    shape: _SegmentResponse
  }
};
