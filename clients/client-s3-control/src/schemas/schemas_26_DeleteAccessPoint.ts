// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DAP, _DAPR, _h, _hH, _hL, _N, _xaai, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessPointRequest = struct(
  n0,
  _DAPR,
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
export var DeleteAccessPoint = op(
  n0,
  _DAP,
  {
    [_h]: ["DELETE", "/v20180820/accesspoint/{Name}", 200],
  },
  () => DeleteAccessPointRequest,
  () => Unit
);
