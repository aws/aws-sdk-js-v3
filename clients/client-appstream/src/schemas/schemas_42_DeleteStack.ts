// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSe, _DSR, _DSRe, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStackRequest = struct(n0, _DSR, 0, [_N], [0]);
export var DeleteStackResult = struct(n0, _DSRe, 0, [], []);
export var DeleteStack = op(
  n0,
  _DSe,
  0,
  () => DeleteStackRequest,
  () => DeleteStackResult
);
