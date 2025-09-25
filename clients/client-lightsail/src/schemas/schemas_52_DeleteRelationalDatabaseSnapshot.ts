// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRDS, _DRDSR, _DRDSRe, _ht, _o, _rDSN, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRelationalDatabaseSnapshotRequest = struct(n0, _DRDSR, 0, [_rDSN], [0]);
export var DeleteRelationalDatabaseSnapshotResult = struct(n0, _DRDSRe, 0, [_o], [() => OperationList]);
export var DeleteRelationalDatabaseSnapshot = op(
  n0,
  _DRDS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteRelationalDatabaseSnapshot", 200],
  },
  () => DeleteRelationalDatabaseSnapshotRequest,
  () => DeleteRelationalDatabaseSnapshotResult
);
