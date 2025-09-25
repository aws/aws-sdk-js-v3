// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AWDWMG, _AWDWMGR, _AWDWMGRs, _h, _I, _WDI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateWirelessDeviceWithMulticastGroupRequest = struct(n0, _AWDWMGR, 0, [_I, _WDI], [[0, 1], 0]);
export var AssociateWirelessDeviceWithMulticastGroupResponse = struct(n0, _AWDWMGRs, 0, [], []);
export var AssociateWirelessDeviceWithMulticastGroup = op(
  n0,
  _AWDWMG,
  {
    [_h]: ["PUT", "/multicast-groups/{Id}/wireless-device", 204],
  },
  () => AssociateWirelessDeviceWithMulticastGroupRequest,
  () => AssociateWirelessDeviceWithMulticastGroupResponse
);
