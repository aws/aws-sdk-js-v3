// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _STJ, _STJR, _TJN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopTrainingJobRequest = struct(n0, _STJR, 0, [_TJN], [0]);
export var StopTrainingJob = op(
  n0,
  _STJ,
  0,
  () => StopTrainingJobRequest,
  () => Unit
);
