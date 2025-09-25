// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _DS,
  _dS,
  _dSi,
  _DSL,
  _dSN,
  _fDA,
  _fDN,
  _fIA,
  _fIN,
  _GDS,
  _GDSe,
  _GDSR,
  _GDSRe,
  _GDSRet,
  _GDSReti,
  _ht,
  _iFAS,
  _l,
  _n,
  _nPT,
  _prog,
  _pT,
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

export var DiskSnapshot = struct(
  n0,
  _DS,
  0,
  [_n, _a, _sC, _cA, _l, _rT, _ta, _sIG, _sta, _prog, _fDN, _fDA, _fIN, _fIA, _iFAS],
  [0, 0, 0, 4, () => ResourceLocation, 0, () => TagList, 1, 0, 0, 0, 0, 0, 0, 2]
);
export var GetDiskSnapshotRequest = struct(n0, _GDSR, 0, [_dSN], [0]);
export var GetDiskSnapshotResult = struct(n0, _GDSRe, 0, [_dS], [() => DiskSnapshot]);
export var GetDiskSnapshotsRequest = struct(n0, _GDSRet, 0, [_pT], [0]);
export var GetDiskSnapshotsResult = struct(n0, _GDSReti, 0, [_dSi, _nPT], [() => DiskSnapshotList, 0]);
export var DiskSnapshotList = list(n0, _DSL, 0, () => DiskSnapshot);
export var GetDiskSnapshot = op(
  n0,
  _GDS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetDiskSnapshot", 200],
  },
  () => GetDiskSnapshotRequest,
  () => GetDiskSnapshotResult
);
export var GetDiskSnapshots = op(
  n0,
  _GDSe,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetDiskSnapshots", 200],
  },
  () => GetDiskSnapshotsRequest,
  () => GetDiskSnapshotsResult
);
