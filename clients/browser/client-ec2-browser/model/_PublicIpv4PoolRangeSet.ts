import { List as _List_ } from "@aws-sdk/types";
import { _PublicIpv4PoolRange } from "./_PublicIpv4PoolRange";

export const _PublicIpv4PoolRangeSet: _List_ = {
  type: "list",
  member: {
    shape: _PublicIpv4PoolRange,
    locationName: "item"
  }
};
