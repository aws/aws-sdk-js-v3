import { List as _List_ } from "@aws-sdk/types";
import { _Ipv6Range } from "./_Ipv6Range";

export const _Ipv6RangeList: _List_ = {
  type: "list",
  member: {
    shape: _Ipv6Range,
    locationName: "item"
  }
};
