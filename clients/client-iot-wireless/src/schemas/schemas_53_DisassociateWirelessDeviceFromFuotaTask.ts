// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWDFFT, _DWDFFTR, _DWDFFTRi, _h, _I, _WDI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateWirelessDeviceFromFuotaTaskRequest = struct(
  n0,
  _DWDFFTR,
  0,
  [_I, _WDI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateWirelessDeviceFromFuotaTaskResponse = struct(n0, _DWDFFTRi, 0, [], []);
export var DisassociateWirelessDeviceFromFuotaTask = op(
  n0,
  _DWDFFT,
  {
    [_h]: ["DELETE", "/fuota-tasks/{Id}/wireless-devices/{WirelessDeviceId}", 204],
  },
  () => DisassociateWirelessDeviceFromFuotaTaskRequest,
  () => DisassociateWirelessDeviceFromFuotaTaskResponse
);
