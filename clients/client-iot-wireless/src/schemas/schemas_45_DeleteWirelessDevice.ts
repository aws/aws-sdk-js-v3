// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWD, _DWDR, _DWDRe, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWirelessDeviceRequest = struct(n0, _DWDR, 0, [_I], [[0, 1]]);
export var DeleteWirelessDeviceResponse = struct(n0, _DWDRe, 0, [], []);
export var DeleteWirelessDevice = op(
  n0,
  _DWD,
  {
    [_h]: ["DELETE", "/wireless-devices/{Id}", 204],
  },
  () => DeleteWirelessDeviceRequest,
  () => DeleteWirelessDeviceResponse
);
