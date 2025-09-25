// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _PI, _UP, _UPR, _UPRp, _US, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateProblemRequest = struct(n0, _UPR, 0, [_PI, _US, _V], [0, 0, 0]);
export var UpdateProblemResponse = struct(n0, _UPRp, 0, [], []);
export var UpdateProblem = op(
  n0,
  _UP,
  0,
  () => UpdateProblemRequest,
  () => UpdateProblemResponse
);
