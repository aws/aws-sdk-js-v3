// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cN, _hQ, _ht, _LN, _LNR, _LNRi, _mR, _nod, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListNodegroupsRequest = struct(
  n0,
  _LNR,
  0,
  [_cN, _mR, _nT],
  [
    [0, 1],
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
  ]
);
export var ListNodegroupsResponse = struct(n0, _LNRi, 0, [_nod, _nT], [64 | 0, 0]);
export var ListNodegroups = op(
  n0,
  _LN,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/node-groups", 200],
  },
  () => ListNodegroupsRequest,
  () => ListNodegroupsResponse
);
