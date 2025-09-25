// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _aT,
  _aUN,
  _aUP,
  _bRP,
  _C,
  _c,
  _cA,
  _CC,
  _CCI,
  _CCO,
  _CCS,
  _CCSI,
  _CCSIr,
  _CCSO,
  _CCSOr,
  _CCSr,
  _cCT,
  _cE,
  _cl,
  _cN,
  _CS,
  _cT,
  _cTl,
  _cTo,
  _DC,
  _DCI,
  _DCO,
  _DCS,
  _DCSI,
  _DCSO,
  _e,
  _GC,
  _GCI,
  _GCO,
  _GCS,
  _GCSI,
  _GCSO,
  _h,
  _hE,
  _kKI,
  _m,
  _P,
  _pBW,
  _pMW,
  _RCFS,
  _RCFSI,
  _RCFSO,
  _S,
  _s,
  _sA,
  _SC,
  _sC,
  _sCh,
  _SCI,
  _SCIt,
  _SCO,
  _SCOt,
  _SCt,
  _sCT,
  _sh,
  _sI,
  _sIC,
  _sIh,
  _SL,
  _sN,
  _sn,
  _SQEE,
  _sT,
  _t,
  _tSN,
  _UC,
  _UCI,
  _UCO,
  _vSGI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Password = sim(n0, _P, 0, 8);
export var Cluster = struct(
  n0,
  _C,
  0,
  [_cN, _cA, _s, _cE, _cT, _aUN, _aT, _sC, _sCh, _vSGI, _sI, _pMW, _kKI, _sh, _bRP, _pBW, _sIC],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 64 | 0, 64 | 0, 0, 0, () => ShardList, 1, 0, 1]
);
export var ClusterSnapshot = struct(
  n0,
  _CS,
  0,
  [_sI, _sN, _sA, _sCT, _cA, _cCT, _s, _vSGI, _aUN, _kKI, _sT],
  [64 | 0, 0, 0, 0, 0, 0, 0, 64 | 0, 0, 0, 0]
);
export var CopyClusterSnapshotInput = struct(n0, _CCSI, 0, [_sA, _tSN, _kKI, _cTo, _t], [[0, 1], 0, 0, 2, 128 | 0]);
export var CopyClusterSnapshotOutput = struct(n0, _CCSO, 0, [_sn], [() => ClusterSnapshot]);
export var CreateClusterInput = struct(
  n0,
  _CCI,
  0,
  [_cN, _aT, _aUN, _aUP, _sC, _sCh, _vSGI, _sI, _kKI, _cTl, _pMW, _t, _bRP, _pBW, _sIC],
  [0, 0, 0, [() => Password, 0], 1, 1, 64 | 0, 64 | 0, 0, [0, 4], 0, 128 | 0, 1, 0, 1]
);
export var CreateClusterOutput = struct(n0, _CCO, 0, [_cl], [() => Cluster]);
export var CreateClusterSnapshotInput = struct(n0, _CCSIr, 0, [_cA, _sN, _t], [0, 0, 128 | 0]);
export var CreateClusterSnapshotOutput = struct(n0, _CCSOr, 0, [_sn], [() => ClusterSnapshot]);
export var DeleteClusterInput = struct(n0, _DCI, 0, [_cA], [[0, 1]]);
export var DeleteClusterOutput = struct(n0, _DCO, 0, [_cl], [() => Cluster]);
export var DeleteClusterSnapshotInput = struct(n0, _DCSI, 0, [_sA], [[0, 1]]);
export var DeleteClusterSnapshotOutput = struct(n0, _DCSO, 0, [_sn], [() => ClusterSnapshot]);
export var GetClusterInput = struct(n0, _GCI, 0, [_cA], [[0, 1]]);
export var GetClusterOutput = struct(n0, _GCO, 0, [_cl], [() => Cluster]);
export var GetClusterSnapshotInput = struct(n0, _GCSI, 0, [_sA], [[0, 1]]);
export var GetClusterSnapshotOutput = struct(n0, _GCSO, 0, [_sn], [() => ClusterSnapshot]);
export var RestoreClusterFromSnapshotInput = struct(
  n0,
  _RCFSI,
  0,
  [_cN, _sA, _vSGI, _sI, _kKI, _t, _sC, _sIC],
  [0, [0, 1], 64 | 0, 64 | 0, 0, 128 | 0, 1, 1]
);
export var RestoreClusterFromSnapshotOutput = struct(n0, _RCFSO, 0, [_cl], [() => Cluster]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var Shard = struct(n0, _S, 0, [_sIh, _cT, _s], [0, 0, 0]);
export var StartClusterInput = struct(n0, _SCI, 0, [_cA], [[0, 1]]);
export var StartClusterOutput = struct(n0, _SCO, 0, [_cl], [() => Cluster]);
export var StopClusterInput = struct(n0, _SCIt, 0, [_cA], [[0, 1]]);
export var StopClusterOutput = struct(n0, _SCOt, 0, [_cl], [() => Cluster]);
export var UpdateClusterInput = struct(
  n0,
  _UCI,
  0,
  [_cA, _aT, _sC, _sCh, _vSGI, _sI, _aUP, _cTl, _pMW, _bRP, _pBW, _sIC],
  [[0, 1], 0, 1, 1, 64 | 0, 64 | 0, [() => Password, 0], [0, 4], 0, 1, 0, 1]
);
export var UpdateClusterOutput = struct(n0, _UCO, 0, [_cl], [() => Cluster]);
export var ShardList = list(n0, _SL, 0, () => Shard);
export var StringList = 64 | 0;

export var CopyClusterSnapshot = op(
  n0,
  _CCS,
  {
    [_h]: ["POST", "/cluster-snapshot/{snapshotArn}/copy", 200],
  },
  () => CopyClusterSnapshotInput,
  () => CopyClusterSnapshotOutput
);
export var CreateCluster = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/cluster", 200],
  },
  () => CreateClusterInput,
  () => CreateClusterOutput
);
export var CreateClusterSnapshot = op(
  n0,
  _CCSr,
  {
    [_h]: ["POST", "/cluster-snapshot", 200],
  },
  () => CreateClusterSnapshotInput,
  () => CreateClusterSnapshotOutput
);
export var DeleteCluster = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/cluster/{clusterArn}", 200],
  },
  () => DeleteClusterInput,
  () => DeleteClusterOutput
);
export var DeleteClusterSnapshot = op(
  n0,
  _DCS,
  {
    [_h]: ["DELETE", "/cluster-snapshot/{snapshotArn}", 200],
  },
  () => DeleteClusterSnapshotInput,
  () => DeleteClusterSnapshotOutput
);
export var GetCluster = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/cluster/{clusterArn}", 200],
  },
  () => GetClusterInput,
  () => GetClusterOutput
);
export var GetClusterSnapshot = op(
  n0,
  _GCS,
  {
    [_h]: ["GET", "/cluster-snapshot/{snapshotArn}", 200],
  },
  () => GetClusterSnapshotInput,
  () => GetClusterSnapshotOutput
);
export var RestoreClusterFromSnapshot = op(
  n0,
  _RCFS,
  {
    [_h]: ["POST", "/cluster-snapshot/{snapshotArn}/restore", 200],
  },
  () => RestoreClusterFromSnapshotInput,
  () => RestoreClusterFromSnapshotOutput
);
export var StartCluster = op(
  n0,
  _SC,
  {
    [_h]: ["POST", "/cluster/{clusterArn}/start", 200],
  },
  () => StartClusterInput,
  () => StartClusterOutput
);
export var StopCluster = op(
  n0,
  _SCt,
  {
    [_h]: ["POST", "/cluster/{clusterArn}/stop", 200],
  },
  () => StopClusterInput,
  () => StopClusterOutput
);
export var UpdateCluster = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/cluster/{clusterArn}", 200],
  },
  () => UpdateClusterInput,
  () => UpdateClusterOutput
);
