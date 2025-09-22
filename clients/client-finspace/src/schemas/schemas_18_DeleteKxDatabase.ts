// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cTl, _DKD, _DKDR, _DKDRe, _dN, _eI, _h, _hQ, _iT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKxDatabaseRequest = struct(
  n0,
  _DKDR,
  0,
  [_eI, _dN, _cTl],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
  ]
);
export var DeleteKxDatabaseResponse = struct(n0, _DKDRe, 0, [], []);
export var DeleteKxDatabase = op(
  n0,
  _DKD,
  {
    [_h]: ["DELETE", "/kx/environments/{environmentId}/databases/{databaseName}", 200],
  },
  () => DeleteKxDatabaseRequest,
  () => DeleteKxDatabaseResponse
);
