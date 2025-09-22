// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DF, _DFR, _fA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFilterRequest = struct(n0, _DFR, 0, [_fA], [0]);
export var DeleteFilter = op(
  n0,
  _DF,
  0,
  () => DeleteFilterRequest,
  () => Unit
);
