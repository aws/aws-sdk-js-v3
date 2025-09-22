// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DABB, _DABBR, _DABBRe, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAppBlockBuilderRequest = struct(n0, _DABBR, 0, [_N], [0]);
export var DeleteAppBlockBuilderResult = struct(n0, _DABBRe, 0, [], []);
export var DeleteAppBlockBuilder = op(
  n0,
  _DABB,
  0,
  () => DeleteAppBlockBuilderRequest,
  () => DeleteAppBlockBuilderResult
);
