import { List as _List_ } from "@aws-sdk/types";
import { _NetworkInterfaceIpv6Address } from "./_NetworkInterfaceIpv6Address";

export const _NetworkInterfaceIpv6AddressesList: _List_ = {
  type: "list",
  member: {
    shape: _NetworkInterfaceIpv6Address,
    locationName: "item"
  }
};
