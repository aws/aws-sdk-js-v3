// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TargetInUseException as __TargetInUseException } from "../models/index";
import { _aQE, _c, _DTFMW, _DTFMWR, _DTFMWRe, _e, _M, _Sa, _TIUE, _WI, _WTI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterTargetFromMaintenanceWindowRequest = struct(n0, _DTFMWR, 0, [_WI, _WTI, _Sa], [0, 0, 2]);
export var DeregisterTargetFromMaintenanceWindowResult = struct(n0, _DTFMWRe, 0, [_WI, _WTI], [0, 0]);
export var TargetInUseException = error(
  n0,
  _TIUE,
  {
    [_e]: _c,
    [_aQE]: [`TargetInUseException`, 400],
  },
  [_M],
  [0],

  __TargetInUseException
);
export var DeregisterTargetFromMaintenanceWindow = op(
  n0,
  _DTFMW,
  0,
  () => DeregisterTargetFromMaintenanceWindowRequest,
  () => DeregisterTargetFromMaintenanceWindowResult
);
