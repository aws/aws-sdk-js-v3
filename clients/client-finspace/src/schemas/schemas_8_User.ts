// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _cN, _eI, _GKCS, _GKCSR, _GKCSRe, _h, _hQ, _sCS, _SKCS, _uA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SignedKxConnectionString = sim(n0, _SKCS, 0, 8);
export var GetKxConnectionStringRequest = struct(
  n0,
  _GKCSR,
  0,
  [_uA, _eI, _cN],
  [
    [
      0,
      {
        [_hQ]: _uA,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _cN,
      },
    ],
  ]
);
export var GetKxConnectionStringResponse = struct(n0, _GKCSRe, 0, [_sCS], [[() => SignedKxConnectionString, 0]]);
export var GetKxConnectionString = op(
  n0,
  _GKCS,
  {
    [_h]: ["GET", "/kx/environments/{environmentId}/connectionString", 200],
  },
  () => GetKxConnectionStringRequest,
  () => GetKxConnectionStringResponse
);
