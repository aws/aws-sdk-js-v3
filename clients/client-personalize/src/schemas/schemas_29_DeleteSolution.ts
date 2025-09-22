// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSel, _DSRe, _sAo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSolutionRequest = struct(n0, _DSRe, 0, [_sAo], [0]);
export var DeleteSolution = op(
  n0,
  _DSel,
  2,
  () => DeleteSolutionRequest,
  () => Unit
);
