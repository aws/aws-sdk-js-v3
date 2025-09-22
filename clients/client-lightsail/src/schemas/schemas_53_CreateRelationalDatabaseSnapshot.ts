// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRDS, _CRDSR, _CRDSRr, _ht, _o, _rDN, _rDSN, _ta, n0, OperationList, TagList } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRelationalDatabaseSnapshotRequest = struct(n0, _CRDSR, 0, [_rDN, _rDSN, _ta], [0, 0, () => TagList]);
export var CreateRelationalDatabaseSnapshotResult = struct(n0, _CRDSRr, 0, [_o], [() => OperationList]);
export var CreateRelationalDatabaseSnapshot = op(
  n0,
  _CRDS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateRelationalDatabaseSnapshot", 200],
  },
  () => CreateRelationalDatabaseSnapshotRequest,
  () => CreateRelationalDatabaseSnapshotResult
);
