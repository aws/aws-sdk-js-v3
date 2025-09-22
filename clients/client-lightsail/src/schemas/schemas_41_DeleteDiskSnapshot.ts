// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDS, _DDSR, _DDSRe, _dSN, _ht, _o, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDiskSnapshotRequest = struct(n0, _DDSR, 0, [_dSN], [0]);
export var DeleteDiskSnapshotResult = struct(n0, _DDSRe, 0, [_o], [() => OperationList]);
export var DeleteDiskSnapshot = op(
  n0,
  _DDS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteDiskSnapshot", 200],
  },
  () => DeleteDiskSnapshotRequest,
  () => DeleteDiskSnapshotResult
);
