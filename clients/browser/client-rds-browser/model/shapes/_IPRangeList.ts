import { List as _List_ } from "@aws-sdk/types";
import { _IPRange } from "./_IPRange";

export const _IPRangeList: _List_ = {
  type: "list",
  member: {
    shape: _IPRange,
    locationName: "IPRange"
  }
};
