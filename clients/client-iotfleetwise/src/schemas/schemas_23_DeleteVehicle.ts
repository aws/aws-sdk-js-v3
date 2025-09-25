// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DV, _DVR, _DVRe, _ht, _vN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVehicleRequest = struct(n0, _DVR, 0, [_vN], [[0, 1]]);
export var DeleteVehicleResponse = struct(n0, _DVRe, 0, [_vN, _a], [0, 0]);
export var DeleteVehicle = op(
  n0,
  _DV,
  {
    [_ht]: ["DELETE", "/vehicles/{vehicleName}", 204],
  },
  () => DeleteVehicleRequest,
  () => DeleteVehicleResponse
);
