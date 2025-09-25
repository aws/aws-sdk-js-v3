// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSop, _CSR, _CSRo, _ht, _o, _rD, _sR, _sRN, _sSN, _tSN, _uLRAS, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var CopySnapshotRequest = struct(n0, _CSR, 0, [_sSN, _sRN, _rD, _uLRAS, _tSN, _sR], [0, 0, 0, 2, 0, 0]);
export var CopySnapshotResult = struct(n0, _CSRo, 0, [_o], [() => OperationList]);
export var CopySnapshot = op(
  n0,
  _CSop,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CopySnapshot", 200],
  },
  () => CopySnapshotRequest,
  () => CopySnapshotResult
);
