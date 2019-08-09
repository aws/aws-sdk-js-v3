import { List as _List_ } from "@aws-sdk/types";
import { _InstanceIpv6AddressRequest } from "./_InstanceIpv6AddressRequest";

export const _InstanceIpv6AddressListRequest: _List_ = {
  type: "list",
  member: {
    shape: _InstanceIpv6AddressRequest,
    locationName: "InstanceIpv6Address"
  }
};
