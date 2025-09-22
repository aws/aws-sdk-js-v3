// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLe, _DLR, _DLRe, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLabelRequest = struct(n0, _DLR, 0, [_n], [0]);
export var DeleteLabelResult = struct(n0, _DLRe, 0, [], []);
export var DeleteLabel = op(
  n0,
  _DLe,
  0,
  () => DeleteLabelRequest,
  () => DeleteLabelResult
);
