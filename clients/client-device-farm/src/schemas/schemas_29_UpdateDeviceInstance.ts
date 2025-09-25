// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _dI, _l, _pAr, _UDI, _UDIR, _UDIRp, DeviceInstance, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDeviceInstanceRequest = struct(n0, _UDIR, 0, [_a, _pAr, _l], [0, 0, 64 | 0]);
export var UpdateDeviceInstanceResult = struct(n0, _UDIRp, 0, [_dI], [() => DeviceInstance]);
export var UpdateDeviceInstance = op(
  n0,
  _UDI,
  0,
  () => UpdateDeviceInstanceRequest,
  () => UpdateDeviceInstanceResult
);
