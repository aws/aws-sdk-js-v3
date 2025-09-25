// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _IDI, _SIDMW, _SIDMWR, _SIDMWRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartInputDeviceMaintenanceWindowRequest = struct(n0, _SIDMWR, 0, [_IDI], [[0, 1]]);
export var StartInputDeviceMaintenanceWindowResponse = struct(n0, _SIDMWRt, 0, [], []);
export var StartInputDeviceMaintenanceWindow = op(
  n0,
  _SIDMW,
  {
    [_ht]: ["POST", "/prod/inputDevices/{InputDeviceId}/startInputDeviceMaintenanceWindow", 200],
  },
  () => StartInputDeviceMaintenanceWindowRequest,
  () => StartInputDeviceMaintenanceWindowResponse
);
