// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CJN, _DCJ, _DCJR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCompilationJobRequest = struct(n0, _DCJR, 0, [_CJN], [0]);
export var DeleteCompilationJob = op(
  n0,
  _DCJ,
  0,
  () => DeleteCompilationJobRequest,
  () => Unit
);
