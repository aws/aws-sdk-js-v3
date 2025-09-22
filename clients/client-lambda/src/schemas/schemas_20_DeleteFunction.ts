// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DF, _DFR, _FN, _h, _hQ, _Q, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFunctionRequest = struct(
  n0,
  _DFR,
  0,
  [_FN, _Q],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
  ]
);
export var DeleteFunction = op(
  n0,
  _DF,
  {
    [_h]: ["DELETE", "/2015-03-31/functions/{FunctionName}", 204],
  },
  () => DeleteFunctionRequest,
  () => Unit
);
