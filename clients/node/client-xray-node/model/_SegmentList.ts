import { List as _List_ } from "@aws-sdk/types";
import { _Segment } from "./_Segment";

export const _SegmentList: _List_ = {
  type: "list",
  member: {
    shape: _Segment
  }
};
