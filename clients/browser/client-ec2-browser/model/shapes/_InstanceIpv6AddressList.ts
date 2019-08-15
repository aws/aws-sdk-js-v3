import { List as _List_ } from "@aws-sdk/types";
import { _InstanceIpv6Address } from "./_InstanceIpv6Address";

export const _InstanceIpv6AddressList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceIpv6Address,
    locationName: "item"
  }
};
