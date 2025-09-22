// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DOJ, _DOJR, _OJN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOptimizationJobRequest = struct(n0, _DOJR, 0, [_OJN], [0]);
export var DeleteOptimizationJob = op(
  n0,
  _DOJ,
  0,
  () => DeleteOptimizationJobRequest,
  () => Unit
);
