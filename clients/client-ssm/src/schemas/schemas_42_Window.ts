// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTFMWe, _DTFMWRer, _DTFMWRere, _WI, _WTIi, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterTaskFromMaintenanceWindowRequest = struct(n0, _DTFMWRer, 0, [_WI, _WTIi], [0, 0]);
export var DeregisterTaskFromMaintenanceWindowResult = struct(n0, _DTFMWRere, 0, [_WI, _WTIi], [0, 0]);
export var DeregisterTaskFromMaintenanceWindow = op(
  n0,
  _DTFMWe,
  0,
  () => DeregisterTaskFromMaintenanceWindowRequest,
  () => DeregisterTaskFromMaintenanceWindowResult
);
