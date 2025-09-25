// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LW, _MN, _PM, _RF, _RSD, _URS, _URSR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateRetrainingSchedulerRequest = struct(n0, _URSR, 0, [_MN, _RSD, _RF, _LW, _PM], [0, 4, 0, 0, 0]);
export var UpdateRetrainingScheduler = op(
  n0,
  _URS,
  0,
  () => UpdateRetrainingSchedulerRequest,
  () => Unit
);
