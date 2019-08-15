import { List as _List_ } from "@aws-sdk/types";
import { _Range } from "./_Range";

export const _RangeList: _List_ = {
  type: "list",
  member: {
    shape: _Range,
    locationName: "Range"
  }
};
