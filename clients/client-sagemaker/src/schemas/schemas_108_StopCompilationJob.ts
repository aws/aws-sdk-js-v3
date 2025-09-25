// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CJN, _SCJ, _SCJR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopCompilationJobRequest = struct(n0, _SCJR, 0, [_CJN], [0]);
export var StopCompilationJob = op(
  n0,
  _SCJ,
  0,
  () => StopCompilationJobRequest,
  () => Unit
);
