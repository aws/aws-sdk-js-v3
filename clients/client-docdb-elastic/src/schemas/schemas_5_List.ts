// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _CIL,
  _CL,
  _clu,
  _cN,
  _CSIL,
  _CSL,
  _h,
  _hQ,
  _LC,
  _LCI,
  _LCO,
  _LCS,
  _LCSI,
  _LCSO,
  _mR,
  _nT,
  _s,
  _sA,
  _sCT,
  _sN,
  _sna,
  _sT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterInList = struct(n0, _CIL, 0, [_cN, _cA, _s], [0, 0, 0]);
export var ClusterSnapshotInList = struct(n0, _CSIL, 0, [_sN, _sA, _cA, _s, _sCT], [0, 0, 0, 0, 0]);
export var ListClustersInput = struct(
  n0,
  _LCI,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListClusterSnapshotsInput = struct(
  n0,
  _LCSI,
  0,
  [_cA, _nT, _mR, _sT],
  [
    [
      0,
      {
        [_hQ]: _cA,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _sT,
      },
    ],
  ]
);
export var ListClusterSnapshotsOutput = struct(n0, _LCSO, 0, [_sna, _nT], [() => ClusterSnapshotList, 0]);
export var ListClustersOutput = struct(n0, _LCO, 0, [_clu, _nT], [() => ClusterList, 0]);
export var ClusterList = list(n0, _CL, 0, () => ClusterInList);
export var ClusterSnapshotList = list(n0, _CSL, 0, () => ClusterSnapshotInList);
export var ListClusters = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/clusters", 200],
  },
  () => ListClustersInput,
  () => ListClustersOutput
);
export var ListClusterSnapshots = op(
  n0,
  _LCS,
  {
    [_h]: ["GET", "/cluster-snapshots", 200],
  },
  () => ListClusterSnapshotsInput,
  () => ListClusterSnapshotsOutput
);
