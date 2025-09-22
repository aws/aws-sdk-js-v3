// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EPJN, _SEPJ, _SEPJR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopEdgePackagingJobRequest = struct(n0, _SEPJR, 0, [_EPJN], [0]);
export var StopEdgePackagingJob = op(
  n0,
  _SEPJ,
  0,
  () => StopEdgePackagingJobRequest,
  () => Unit
);
