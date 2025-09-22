// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aN, _hQ, _ht, _LU, _LUR, _LURi, _mR, _n, _nN, _nT, _uIp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListUpdatesRequest = struct(
  n0,
  _LUR,
  0,
  [_n, _nN, _aN, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nN,
      },
    ],
    [
      0,
      {
        [_hQ]: _aN,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListUpdatesResponse = struct(n0, _LURi, 0, [_uIp, _nT], [64 | 0, 0]);
export var ListUpdates = op(
  n0,
  _LU,
  {
    [_ht]: ["GET", "/clusters/{name}/updates", 200],
  },
  () => ListUpdatesRequest,
  () => ListUpdatesResponse
);
