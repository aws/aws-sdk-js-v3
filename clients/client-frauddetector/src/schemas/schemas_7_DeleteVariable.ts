// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DV, _DVR, _DVRe, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVariableRequest = struct(n0, _DVR, 0, [_n], [0]);
export var DeleteVariableResult = struct(n0, _DVRe, 0, [], []);
export var DeleteVariable = op(
  n0,
  _DV,
  0,
  () => DeleteVariableRequest,
  () => DeleteVariableResult
);
