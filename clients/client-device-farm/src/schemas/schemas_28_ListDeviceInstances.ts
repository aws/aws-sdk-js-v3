// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dIe, _LDI, _LDIR, _LDIRi, _mR, _nT, n0 } from "./schemas_0";
import { DeviceInstances } from "./schemas_31_List";

/* eslint no-var: 0 */

export var ListDeviceInstancesRequest = struct(n0, _LDIR, 0, [_mR, _nT], [1, 0]);
export var ListDeviceInstancesResult = struct(n0, _LDIRi, 0, [_dIe, _nT], [() => DeviceInstances, 0]);
export var ListDeviceInstances = op(
  n0,
  _LDI,
  0,
  () => ListDeviceInstancesRequest,
  () => ListDeviceInstancesResult
);
