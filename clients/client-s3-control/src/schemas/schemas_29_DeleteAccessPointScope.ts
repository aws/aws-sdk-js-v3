// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DAPS, _DAPSR, _h, _hH, _hL, _N, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessPointScopeRequest = struct(
  n0,
  _DAPSR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var DeleteAccessPointScope = op(
  n0,
  _DAPS,
  {
    [_h]: ["DELETE", "/v20180820/accesspoint/{Name}/scope", 200],
  },
  () => DeleteAccessPointScopeRequest,
  () => Unit
);
