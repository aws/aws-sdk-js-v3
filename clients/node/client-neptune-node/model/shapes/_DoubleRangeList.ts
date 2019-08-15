import { List as _List_ } from "@aws-sdk/types";
import { _DoubleRange } from "./_DoubleRange";

export const _DoubleRangeList: _List_ = {
  type: "list",
  member: {
    shape: _DoubleRange,
    locationName: "DoubleRange"
  }
};
