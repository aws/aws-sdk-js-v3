import { List as _List_ } from "@aws-sdk/types";
import { _ScheduledInstancesIpv6Address } from "./_ScheduledInstancesIpv6Address";

export const _ScheduledInstancesIpv6AddressList: _List_ = {
  type: "list",
  member: {
    shape: _ScheduledInstancesIpv6Address,
    locationName: "Ipv6Address"
  }
};
