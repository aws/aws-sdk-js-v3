// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _eng,
  _eV,
  _fRDA,
  _fRDBI,
  _fRDBIr,
  _fRDN,
  _GRDS,
  _GRDSe,
  _GRDSR,
  _GRDSRe,
  _GRDSRet,
  _GRDSRete,
  _ht,
  _l,
  _n,
  _nPT,
  _pT,
  _RDS,
  _rDS,
  _rDSe,
  _RDSL,
  _rDSN,
  _rT,
  _sC,
  _sIG,
  _sta,
  _ta,
  n0,
  ResourceLocation,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRelationalDatabaseSnapshotRequest = struct(n0, _GRDSR, 0, [_rDSN], [0]);
export var GetRelationalDatabaseSnapshotResult = struct(n0, _GRDSRe, 0, [_rDS], [() => RelationalDatabaseSnapshot]);
export var GetRelationalDatabaseSnapshotsRequest = struct(n0, _GRDSRet, 0, [_pT], [0]);
export var GetRelationalDatabaseSnapshotsResult = struct(
  n0,
  _GRDSRete,
  0,
  [_rDSe, _nPT],
  [() => RelationalDatabaseSnapshotList, 0]
);
export var RelationalDatabaseSnapshot = struct(
  n0,
  _RDS,
  0,
  [_n, _a, _sC, _cA, _l, _rT, _ta, _eng, _eV, _sIG, _sta, _fRDN, _fRDA, _fRDBI, _fRDBIr],
  [0, 0, 0, 4, () => ResourceLocation, 0, () => TagList, 0, 0, 1, 0, 0, 0, 0, 0]
);
export var RelationalDatabaseSnapshotList = list(n0, _RDSL, 0, () => RelationalDatabaseSnapshot);
export var GetRelationalDatabaseSnapshot = op(
  n0,
  _GRDS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabaseSnapshot", 200],
  },
  () => GetRelationalDatabaseSnapshotRequest,
  () => GetRelationalDatabaseSnapshotResult
);
export var GetRelationalDatabaseSnapshots = op(
  n0,
  _GRDSe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabaseSnapshots", 200],
  },
  () => GetRelationalDatabaseSnapshotsRequest,
  () => GetRelationalDatabaseSnapshotsResult
);
