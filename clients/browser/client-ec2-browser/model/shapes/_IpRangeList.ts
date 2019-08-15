import { List as _List_ } from "@aws-sdk/types";
import { _IpRange } from "./_IpRange";

export const _IpRangeList: _List_ = {
  type: "list",
  member: {
    shape: _IpRange,
    locationName: "item"
  }
};
