// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DET, _DETR, _DETRe, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEntityTypeRequest = struct(n0, _DETR, 0, [_n], [0]);
export var DeleteEntityTypeResult = struct(n0, _DETRe, 0, [], []);
export var DeleteEntityType = op(
  n0,
  _DET,
  0,
  () => DeleteEntityTypeRequest,
  () => DeleteEntityTypeResult
);
