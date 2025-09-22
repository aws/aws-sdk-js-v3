// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPCC, _DPCCR, _FN, _h, _hQ, _Q, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProvisionedConcurrencyConfigRequest = struct(
  n0,
  _DPCCR,
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
export var DeleteProvisionedConcurrencyConfig = op(
  n0,
  _DPCC,
  {
    [_h]: ["DELETE", "/2019-09-30/functions/{FunctionName}/provisioned-concurrency", 204],
  },
  () => DeleteProvisionedConcurrencyConfigRequest,
  () => Unit
);
