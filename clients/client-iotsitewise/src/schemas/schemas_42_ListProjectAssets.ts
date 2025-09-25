// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIss, _end, _hQ, _ht, _LPA, _LPAR, _LPARi, _mR, _nT, _pIr, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListProjectAssetsRequest = struct(
  n0,
  _LPAR,
  0,
  [_pIr, _nT, _mR],
  [
    [0, 1],
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
export var ListProjectAssetsResponse = struct(n0, _LPARi, 0, [_aIss, _nT], [64 | 0, 0]);
export var AssetIDs = 64 | 0;

export var ListProjectAssets = op(
  n0,
  _LPA,
  {
    [_ht]: ["GET", "/projects/{projectId}/assets", 200],
    [_end]: ["monitor."],
  },
  () => ListProjectAssetsRequest,
  () => ListProjectAssetsResponse
);
