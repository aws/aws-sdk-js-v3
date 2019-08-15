import { List as _List_ } from "@aws-sdk/types";
import { _ScheduledInstancesNetworkInterface } from "./_ScheduledInstancesNetworkInterface";

export const _ScheduledInstancesNetworkInterfaceSet: _List_ = {
  type: "list",
  member: {
    shape: _ScheduledInstancesNetworkInterface,
    locationName: "NetworkInterface"
  }
};
