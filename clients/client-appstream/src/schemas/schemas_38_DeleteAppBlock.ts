// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAB, _DABR, _DABRe, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAppBlockRequest = struct(n0, _DABR, 0, [_N], [0]);
export var DeleteAppBlockResult = struct(n0, _DABRe, 0, [], []);
export var DeleteAppBlock = op(
  n0,
  _DAB,
  0,
  () => DeleteAppBlockRequest,
  () => DeleteAppBlockResult
);
