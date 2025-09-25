// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _IDI, _SID, _SIDR, _SIDRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartInputDeviceRequest = struct(n0, _SIDR, 0, [_IDI], [[0, 1]]);
export var StartInputDeviceResponse = struct(n0, _SIDRt, 0, [], []);
export var StartInputDevice = op(
  n0,
  _SID,
  {
    [_ht]: ["POST", "/prod/inputDevices/{InputDeviceId}/start", 200],
  },
  () => StartInputDeviceRequest,
  () => StartInputDeviceResponse
);
