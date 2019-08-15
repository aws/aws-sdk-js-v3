import { List as _List_ } from "@aws-sdk/types";
import { _ScheduledInstancesPrivateIpAddressConfig } from "./_ScheduledInstancesPrivateIpAddressConfig";

export const _PrivateIpAddressConfigSet: _List_ = {
  type: "list",
  member: {
    shape: _ScheduledInstancesPrivateIpAddressConfig,
    locationName: "PrivateIpAddressConfigSet"
  }
};
