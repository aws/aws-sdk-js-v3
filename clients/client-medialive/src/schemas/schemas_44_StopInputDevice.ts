// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _IDI, _SIDRto, _SIDRtop, _SIDt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopInputDeviceRequest = struct(n0, _SIDRto, 0, [_IDI], [[0, 1]]);
export var StopInputDeviceResponse = struct(n0, _SIDRtop, 0, [], []);
export var StopInputDevice = op(
  n0,
  _SIDt,
  {
    [_ht]: ["POST", "/prod/inputDevices/{InputDeviceId}/stop", 200],
  },
  () => StopInputDeviceRequest,
  () => StopInputDeviceResponse
);
