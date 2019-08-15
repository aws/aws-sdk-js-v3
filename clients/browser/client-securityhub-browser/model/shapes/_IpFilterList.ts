import { List as _List_ } from "@aws-sdk/types";
import { _IpFilter } from "./_IpFilter";

export const _IpFilterList: _List_ = {
  type: "list",
  member: {
    shape: _IpFilter
  }
};
