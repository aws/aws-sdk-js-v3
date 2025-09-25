// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cTl, _DKDe, _DKDRel, _DKDRele, _dN, _dNa, _eI, _h, _hQ, _iT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKxDataviewRequest = struct(
  n0,
  _DKDRel,
  0,
  [_eI, _dN, _dNa, _cTl],
  [
    [0, 1],
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
export var DeleteKxDataviewResponse = struct(n0, _DKDRele, 0, [], []);
export var DeleteKxDataview = op(
  n0,
  _DKDe,
  {
    [_h]: ["DELETE", "/kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}", 200],
  },
  () => DeleteKxDataviewRequest,
  () => DeleteKxDataviewResponse
);
