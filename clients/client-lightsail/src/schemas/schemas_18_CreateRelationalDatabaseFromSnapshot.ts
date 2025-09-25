// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aZ,
  _CRDFS,
  _CRDFSR,
  _CRDFSRr,
  _ht,
  _o,
  _pAu,
  _rDBI,
  _rDN,
  _rDSN,
  _rTe,
  _sRDN,
  _ta,
  _uLRT,
  n0,
  OperationList,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRelationalDatabaseFromSnapshotRequest = struct(
  n0,
  _CRDFSR,
  0,
  [_rDN, _aZ, _pAu, _rDSN, _rDBI, _sRDN, _rTe, _uLRT, _ta],
  [0, 0, 2, 0, 0, 0, 4, 2, () => TagList]
);
export var CreateRelationalDatabaseFromSnapshotResult = struct(n0, _CRDFSRr, 0, [_o], [() => OperationList]);
export var CreateRelationalDatabaseFromSnapshot = op(
  n0,
  _CRDFS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/CreateRelationalDatabaseFromSnapshot", 200],
  },
  () => CreateRelationalDatabaseFromSnapshotRequest,
  () => CreateRelationalDatabaseFromSnapshotResult
);
