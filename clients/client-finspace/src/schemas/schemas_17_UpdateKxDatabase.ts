// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cTl, _d, _dN, _eI, _h, _lMT, _UKD, _UKDR, _UKDRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateKxDatabaseRequest = struct(n0, _UKDR, 0, [_eI, _dN, _d, _cTl], [[0, 1], [0, 1], 0, [0, 4]]);
export var UpdateKxDatabaseResponse = struct(n0, _UKDRp, 0, [_dN, _eI, _d, _lMT], [0, 0, 0, 4]);
export var UpdateKxDatabase = op(
  n0,
  _UKD,
  {
    [_h]: ["PUT", "/kx/environments/{environmentId}/databases/{databaseName}", 200],
  },
  () => UpdateKxDatabaseRequest,
  () => UpdateKxDatabaseResponse
);
