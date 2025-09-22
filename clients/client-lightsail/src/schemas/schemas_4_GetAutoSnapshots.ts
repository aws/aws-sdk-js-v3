// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AD,
  _ADL,
  _ASD,
  _ASDL,
  _aSu,
  _cA,
  _da,
  _fAD,
  _GAS,
  _GASR,
  _GASRe,
  _ht,
  _pa,
  _rN,
  _rT,
  _s,
  _sIG,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachedDisk = struct(n0, _AD, 0, [_pa, _sIG], [0, 1]);
export var AutoSnapshotDetails = struct(n0, _ASD, 0, [_da, _cA, _s, _fAD], [0, 4, 0, () => AttachedDiskList]);
export var GetAutoSnapshotsRequest = struct(n0, _GASR, 0, [_rN], [0]);
export var GetAutoSnapshotsResult = struct(n0, _GASRe, 0, [_rN, _rT, _aSu], [0, 0, () => AutoSnapshotDetailsList]);
export var AttachedDiskList = list(n0, _ADL, 0, () => AttachedDisk);
export var AutoSnapshotDetailsList = list(n0, _ASDL, 0, () => AutoSnapshotDetails);
export var GetAutoSnapshots = op(
  n0,
  _GAS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetAutoSnapshots", 200],
  },
  () => GetAutoSnapshotsRequest,
  () => GetAutoSnapshotsResult
);
