// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _dI, _GDI, _GDIR, _GDIRe, DeviceInstance, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDeviceInstanceRequest = struct(n0, _GDIR, 0, [_a], [0]);
export var GetDeviceInstanceResult = struct(n0, _GDIRe, 0, [_dI], [() => DeviceInstance]);
export var GetDeviceInstance = op(
  n0,
  _GDI,
  0,
  () => GetDeviceInstanceRequest,
  () => GetDeviceInstanceResult
);
