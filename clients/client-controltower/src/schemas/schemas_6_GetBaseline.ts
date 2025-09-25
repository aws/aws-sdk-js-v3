// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _bI, _d, _GB, _GBI, _GBO, _h, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetBaselineInput = struct(n0, _GBI, 0, [_bI], [0]);
export var GetBaselineOutput = struct(n0, _GBO, 0, [_a, _n, _d], [0, 0, 0]);
export var GetBaseline = op(
  n0,
  _GB,
  {
    [_h]: ["POST", "/get-baseline", 200],
  },
  () => GetBaselineInput,
  () => GetBaselineOutput
);
