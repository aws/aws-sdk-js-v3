// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFEIC, _DFEICR, _FN, _h, _hQ, _Q, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFunctionEventInvokeConfigRequest = struct(
  n0,
  _DFEICR,
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
export var DeleteFunctionEventInvokeConfig = op(
  n0,
  _DFEIC,
  {
    [_h]: ["DELETE", "/2019-09-25/functions/{FunctionName}/event-invoke-config", 204],
  },
  () => DeleteFunctionEventInvokeConfigRequest,
  () => Unit
);
