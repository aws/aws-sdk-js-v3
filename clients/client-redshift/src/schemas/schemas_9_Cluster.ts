// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  BatchModifyClusterSnapshotsLimitExceededFault as __BatchModifyClusterSnapshotsLimitExceededFault,
  ClusterSnapshotAlreadyExistsFault as __ClusterSnapshotAlreadyExistsFault,
  ClusterSnapshotQuotaExceededFault as __ClusterSnapshotQuotaExceededFault,
  InvalidRetentionPeriodFault as __InvalidRetentionPeriodFault,
  SnapshotCopyDisabledFault as __SnapshotCopyDisabledFault,
} from "../models/index";
import {
  _aQE,
  _BMCS,
  _BMCSLEF,
  _BMCSM,
  _BMCSOM,
  _BSOE,
  _C,
  _c,
  _CCSMr,
  _CCSr,
  _CCSRr,
  _CIl,
  _CSAEF,
  _CSQEF,
  _DC,
  _DCM,
  _DCR,
  _E,
  _e,
  _F,
  _FCSI,
  _FCSRP,
  _hE,
  _IRPF,
  _m,
  _Ma,
  _MSCRP,
  _MSCRPM,
  _MSCRPR,
  _MSRP,
  _R,
  _RP,
  _S,
  _SCDF,
  _SEM,
  _SFCS,
  _SI,
  _SIL,
  _T,
  _xN,
  Cluster,
  n0,
  TagList,
} from "./schemas_0";
import { SnapshotErrorMessage, SnapshotIdentifierList } from "./schemas_11_ClusterSnapshots";
import { Snapshot } from "./schemas_70_Snapshot";

/* eslint no-var: 0 */

export var BatchModifyClusterSnapshotsLimitExceededFault = error(
  n0,
  _BMCSLEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`BatchModifyClusterSnapshotsLimitExceededFault`, 400],
  },
  [_m],
  [0],

  __BatchModifyClusterSnapshotsLimitExceededFault
);
export var BatchModifyClusterSnapshotsMessage = struct(
  n0,
  _BMCSM,
  0,
  [_SIL, _MSRP, _F],
  [[() => SnapshotIdentifierList, 0], 1, 2]
);
export var BatchModifyClusterSnapshotsOutputMessage = struct(
  n0,
  _BMCSOM,
  0,
  [_R, _E],
  [
    [() => SnapshotIdentifierList, 0],
    [() => BatchSnapshotOperationErrors, 0],
  ]
);
export var ClusterSnapshotAlreadyExistsFault = error(
  n0,
  _CSAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterSnapshotAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ClusterSnapshotAlreadyExistsFault
);
export var ClusterSnapshotQuotaExceededFault = error(
  n0,
  _CSQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterSnapshotQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ClusterSnapshotQuotaExceededFault
);
export var CreateClusterSnapshotMessage = struct(n0, _CCSMr, 0, [_SI, _CIl, _MSRP, _T], [0, 0, 1, [() => TagList, 0]]);
export var CreateClusterSnapshotResult = struct(n0, _CCSRr, 0, [_S], [[() => Snapshot, 0]]);
export var DeleteClusterMessage = struct(n0, _DCM, 0, [_CIl, _SFCS, _FCSI, _FCSRP], [0, 2, 0, 1]);
export var DeleteClusterResult = struct(n0, _DCR, 0, [_C], [[() => Cluster, 0]]);
export var InvalidRetentionPeriodFault = error(
  n0,
  _IRPF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidRetentionPeriodFault`, 400],
  },
  [_m],
  [0],

  __InvalidRetentionPeriodFault
);
export var ModifySnapshotCopyRetentionPeriodMessage = struct(n0, _MSCRPM, 0, [_CIl, _RP, _Ma], [0, 1, 2]);
export var ModifySnapshotCopyRetentionPeriodResult = struct(n0, _MSCRPR, 0, [_C], [[() => Cluster, 0]]);
export var SnapshotCopyDisabledFault = error(
  n0,
  _SCDF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SnapshotCopyDisabledFault`, 400],
  },
  [_m],
  [0],

  __SnapshotCopyDisabledFault
);
export var BatchSnapshotOperationErrors = list(n0, _BSOE, 0, [
  () => SnapshotErrorMessage,
  {
    [_xN]: _SEM,
  },
]);
export var BatchModifyClusterSnapshots = op(
  n0,
  _BMCS,
  0,
  () => BatchModifyClusterSnapshotsMessage,
  () => BatchModifyClusterSnapshotsOutputMessage
);
export var CreateClusterSnapshot = op(
  n0,
  _CCSr,
  0,
  () => CreateClusterSnapshotMessage,
  () => CreateClusterSnapshotResult
);
export var DeleteCluster = op(
  n0,
  _DC,
  0,
  () => DeleteClusterMessage,
  () => DeleteClusterResult
);
export var ModifySnapshotCopyRetentionPeriod = op(
  n0,
  _MSCRP,
  0,
  () => ModifySnapshotCopyRetentionPeriodMessage,
  () => ModifySnapshotCopyRetentionPeriodResult
);
