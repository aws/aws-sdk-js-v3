import { List as _List_ } from "@aws-sdk/types";
import { _Ipv6CidrBlock } from "./_Ipv6CidrBlock";

export const _Ipv6CidrBlockSet: _List_ = {
  type: "list",
  member: {
    shape: _Ipv6CidrBlock,
    locationName: "item"
  }
};
