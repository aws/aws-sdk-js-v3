// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ES, _ESRx, _ESRxp, _ht, _o, _sSN, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var ExportSnapshotRequest = struct(n0, _ESRx, 0, [_sSN], [0]);
export var ExportSnapshotResult = struct(n0, _ESRxp, 0, [_o], [() => OperationList]);
export var ExportSnapshot = op(
  n0,
  _ES,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/ExportSnapshot", 200],
  },
  () => ExportSnapshotRequest,
  () => ExportSnapshotResult
);
