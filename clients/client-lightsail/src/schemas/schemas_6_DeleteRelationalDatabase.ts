// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRD, _DRDR, _DRDRe, _fRDSN, _ht, _o, _rDN, _sFS, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRelationalDatabaseRequest = struct(n0, _DRDR, 0, [_rDN, _sFS, _fRDSN], [0, 2, 0]);
export var DeleteRelationalDatabaseResult = struct(n0, _DRDRe, 0, [_o], [() => OperationList]);
export var DeleteRelationalDatabase = op(
  n0,
  _DRD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteRelationalDatabase", 200],
  },
  () => DeleteRelationalDatabaseRequest,
  () => DeleteRelationalDatabaseResult
);
