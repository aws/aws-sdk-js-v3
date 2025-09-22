// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIe, _DMDAO, _DMDAOR, _DMDAORe, _OI, _UIs, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMobileDeviceAccessOverrideRequest = struct(n0, _DMDAOR, 0, [_OI, _UIs, _DIe], [0, 0, 0]);
export var DeleteMobileDeviceAccessOverrideResponse = struct(n0, _DMDAORe, 0, [], []);
export var DeleteMobileDeviceAccessOverride = op(
  n0,
  _DMDAO,
  0,
  () => DeleteMobileDeviceAccessOverrideRequest,
  () => DeleteMobileDeviceAccessOverrideResponse
);
