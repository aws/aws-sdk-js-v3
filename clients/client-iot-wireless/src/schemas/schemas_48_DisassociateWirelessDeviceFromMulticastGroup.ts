// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWDFMG, _DWDFMGR, _DWDFMGRi, _h, _I, _WDI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateWirelessDeviceFromMulticastGroupRequest = struct(
  n0,
  _DWDFMGR,
  0,
  [_I, _WDI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateWirelessDeviceFromMulticastGroupResponse = struct(n0, _DWDFMGRi, 0, [], []);
export var DisassociateWirelessDeviceFromMulticastGroup = op(
  n0,
  _DWDFMG,
  {
    [_h]: ["DELETE", "/multicast-groups/{Id}/wireless-devices/{WirelessDeviceId}", 204],
  },
  () => DisassociateWirelessDeviceFromMulticastGroupRequest,
  () => DisassociateWirelessDeviceFromMulticastGroupResponse
);
