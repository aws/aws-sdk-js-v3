// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _clu, _hQ, _ht, _inc, _LC, _LCR, _LCRi, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListClustersRequest = struct(
  n0,
  _LCR,
  0,
  [_mR, _nT, _inc],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _inc,
      },
    ],
  ]
);
export var ListClustersResponse = struct(n0, _LCRi, 0, [_clu, _nT], [64 | 0, 0]);
export var IncludeClustersList = 64 | 0;

export var ListClusters = op(
  n0,
  _LC,
  {
    [_ht]: ["GET", "/clusters", 200],
  },
  () => ListClustersRequest,
  () => ListClustersResponse
);
