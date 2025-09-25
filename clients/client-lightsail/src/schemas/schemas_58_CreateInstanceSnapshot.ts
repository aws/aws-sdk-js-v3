// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CIS, _CISR, _CISRr, _ht, _iN, _iSN, _o, _ta, n0, OperationList, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateInstanceSnapshotRequest = struct(n0, _CISR, 0, [_iSN, _iN, _ta], [0, 0, () => TagList]);
export var CreateInstanceSnapshotResult = struct(n0, _CISRr, 0, [_o], [() => OperationList]);
export var CreateInstanceSnapshot = op(
  n0,
  _CIS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateInstanceSnapshot", 200],
  },
  () => CreateInstanceSnapshotRequest,
  () => CreateInstanceSnapshotResult
);
