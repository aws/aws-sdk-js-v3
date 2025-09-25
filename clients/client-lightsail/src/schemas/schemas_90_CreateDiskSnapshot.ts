// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDS, _CDSR, _CDSRr, _dNi, _dSN, _ht, _iN, _o, _ta, n0, OperationList, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateDiskSnapshotRequest = struct(n0, _CDSR, 0, [_dNi, _dSN, _iN, _ta], [0, 0, 0, () => TagList]);
export var CreateDiskSnapshotResult = struct(n0, _CDSRr, 0, [_o], [() => OperationList]);
export var CreateDiskSnapshot = op(
  n0,
  _CDS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateDiskSnapshot", 200],
  },
  () => CreateDiskSnapshotRequest,
  () => CreateDiskSnapshotResult
);
