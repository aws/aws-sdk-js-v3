// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aEcc, _aPA, _cN, _hQ, _ht, _LAE, _LAER, _LAERi, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListAccessEntriesRequest = struct(
  n0,
  _LAER,
  0,
  [_cN, _aPA, _mR, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _aPA,
      },
    ],
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
export var ListAccessEntriesResponse = struct(n0, _LAERi, 0, [_aEcc, _nT], [64 | 0, 0]);
export var ListAccessEntries = op(
  n0,
  _LAE,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/access-entries", 200],
  },
  () => ListAccessEntriesRequest,
  () => ListAccessEntriesResponse
);
