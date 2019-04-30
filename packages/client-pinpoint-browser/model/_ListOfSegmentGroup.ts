import { List as _List_ } from "@aws-sdk/types";
import { _SegmentGroup } from "./_SegmentGroup";

export const _ListOfSegmentGroup: _List_ = {
  type: "list",
  member: {
    shape: _SegmentGroup
  }
};
