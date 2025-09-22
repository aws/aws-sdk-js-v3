// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIS, _DISR, _DISRe, _ht, _iSN, _o, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInstanceSnapshotRequest = struct(n0, _DISR, 0, [_iSN], [0]);
export var DeleteInstanceSnapshotResult = struct(n0, _DISRe, 0, [_o], [() => OperationList]);
export var DeleteInstanceSnapshot = op(
  n0,
  _DIS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteInstanceSnapshot", 200],
  },
  () => DeleteInstanceSnapshotRequest,
  () => DeleteInstanceSnapshotResult
);
