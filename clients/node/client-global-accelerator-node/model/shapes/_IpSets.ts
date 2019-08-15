import { List as _List_ } from "@aws-sdk/types";
import { _IpSet } from "./_IpSet";

export const _IpSets: _List_ = {
  type: "list",
  member: {
    shape: _IpSet
  }
};
