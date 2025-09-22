// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMW, _DMWR, _DMWRe, _WI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMaintenanceWindowRequest = struct(n0, _DMWR, 0, [_WI], [0]);
export var DeleteMaintenanceWindowResult = struct(n0, _DMWRe, 0, [_WI], [0]);
export var DeleteMaintenanceWindow = op(
  n0,
  _DMW,
  0,
  () => DeleteMaintenanceWindowRequest,
  () => DeleteMaintenanceWindowResult
);
