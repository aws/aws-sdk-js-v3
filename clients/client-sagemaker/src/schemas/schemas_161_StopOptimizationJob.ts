// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _OJN, _SOJ, _SOJR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopOptimizationJobRequest = struct(n0, _SOJR, 0, [_OJN], [0]);
export var StopOptimizationJob = op(
  n0,
  _SOJ,
  0,
  () => StopOptimizationJobRequest,
  () => Unit
);
