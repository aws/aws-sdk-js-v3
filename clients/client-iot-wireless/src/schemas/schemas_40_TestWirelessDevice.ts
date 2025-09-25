// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _I, _Re, _TWD, _TWDR, _TWDRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var TestWirelessDeviceRequest = struct(n0, _TWDR, 0, [_I], [[0, 1]]);
export var TestWirelessDeviceResponse = struct(n0, _TWDRe, 0, [_Re], [0]);
export var TestWirelessDevice = op(
  n0,
  _TWD,
  {
    [_h]: ["POST", "/wireless-devices/{Id}/test", 200],
  },
  () => TestWirelessDeviceRequest,
  () => TestWirelessDeviceResponse
);
