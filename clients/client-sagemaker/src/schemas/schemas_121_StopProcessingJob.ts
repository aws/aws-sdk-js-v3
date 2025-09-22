// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _PJN, _SPJ, _SPJR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopProcessingJobRequest = struct(n0, _SPJR, 0, [_PJN], [0]);
export var StopProcessingJob = op(
  n0,
  _SPJ,
  0,
  () => StopProcessingJobRequest,
  () => Unit
);
