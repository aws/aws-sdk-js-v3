import { List as _List_ } from "@aws-sdk/types";
import { _PublicIpv4Pool } from "./_PublicIpv4Pool";

export const _PublicIpv4PoolSet: _List_ = {
  type: "list",
  member: {
    shape: _PublicIpv4Pool,
    locationName: "item"
  }
};
