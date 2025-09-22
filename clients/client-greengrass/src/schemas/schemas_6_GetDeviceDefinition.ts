// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _CT, _DDI, _GDD, _GDDR, _GDDRe, _h, _I, _LUT, _LV, _LVA, _N, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetDeviceDefinitionRequest = struct(n0, _GDDR, 0, [_DDI], [[0, 1]]);
export var GetDeviceDefinitionResponse = struct(
  n0,
  _GDDRe,
  0,
  [_A, _CT, _I, _LUT, _LV, _LVA, _N, _t],
  [0, 0, 0, 0, 0, 0, 0, 128 | 0]
);
export var GetDeviceDefinition = op(
  n0,
  _GDD,
  {
    [_h]: ["GET", "/greengrass/definition/devices/{DeviceDefinitionId}", 200],
  },
  () => GetDeviceDefinitionRequest,
  () => GetDeviceDefinitionResponse
);
