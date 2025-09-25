// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFUC, _DFUCR, _FN, _h, _hQ, _Q, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFunctionUrlConfigRequest = struct(
  n0,
  _DFUCR,
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
export var DeleteFunctionUrlConfig = op(
  n0,
  _DFUC,
  {
    [_h]: ["DELETE", "/2021-10-31/functions/{FunctionName}/url", 204],
  },
  () => DeleteFunctionUrlConfigRequest,
  () => Unit
);
