// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aTu, _d, _dO, _do, _dS, _du, _ex, _GAT, _GATR, _GATRe, _hQ, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAuthorizationTokenRequest = struct(
  n0,
  _GATR,
  0,
  [_d, _dO, _dS],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      1,
      {
        [_hQ]: _du,
      },
    ],
  ]
);
export var GetAuthorizationTokenResult = struct(n0, _GATRe, 8, [_aTu, _ex], [0, 4]);
export var GetAuthorizationToken = op(
  n0,
  _GAT,
  {
    [_ht]: ["POST", "/v1/authorization-token", 200],
  },
  () => GetAuthorizationTokenRequest,
  () => GetAuthorizationTokenResult
);
