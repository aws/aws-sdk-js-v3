// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWDFT, _DWDFTR, _DWDFTRi, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateWirelessDeviceFromThingRequest = struct(n0, _DWDFTR, 0, [_I], [[0, 1]]);
export var DisassociateWirelessDeviceFromThingResponse = struct(n0, _DWDFTRi, 0, [], []);
export var DisassociateWirelessDeviceFromThing = op(
  n0,
  _DWDFT,
  {
    [_h]: ["DELETE", "/wireless-devices/{Id}/thing", 204],
  },
  () => DisassociateWirelessDeviceFromThingRequest,
  () => DisassociateWirelessDeviceFromThingResponse
);
