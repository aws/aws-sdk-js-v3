// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _da, _DAS, _DASR, _DASRe, _ht, _o, _rN, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAutoSnapshotRequest = struct(n0, _DASR, 0, [_rN, _da], [0, 0]);
export var DeleteAutoSnapshotResult = struct(n0, _DASRe, 0, [_o], [() => OperationList]);
export var DeleteAutoSnapshot = op(
  n0,
  _DAS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteAutoSnapshot", 200],
  },
  () => DeleteAutoSnapshotRequest,
  () => DeleteAutoSnapshotResult
);
