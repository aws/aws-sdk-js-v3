// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DR, _DRR, _DRRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRunRequest = struct(n0, _DRR, 0, [_a], [0]);
export var DeleteRunResult = struct(n0, _DRRe, 0, [], []);
export var DeleteRun = op(
  n0,
  _DR,
  0,
  () => DeleteRunRequest,
  () => DeleteRunResult
);
