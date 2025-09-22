// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRS, _DRSR, _MN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRetrainingSchedulerRequest = struct(n0, _DRSR, 0, [_MN], [0]);
export var DeleteRetrainingScheduler = op(
  n0,
  _DRS,
  0,
  () => DeleteRetrainingSchedulerRequest,
  () => Unit
);
