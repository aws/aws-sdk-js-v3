// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  GlobalClusterAlreadyExistsFault as __GlobalClusterAlreadyExistsFault,
  GlobalClusterNotFoundFault as __GlobalClusterNotFoundFault,
  GlobalClusterQuotaExceededFault as __GlobalClusterQuotaExceededFault,
  InvalidGlobalClusterStateFault as __InvalidGlobalClusterStateFault,
} from "../models/index";
import {
  _ADL,
  _aQE,
  _c,
  _CGC,
  _CGCM,
  _CGCR,
  _DBCA,
  _DCI,
  _DGC,
  _DGCe,
  _DGCM,
  _DGCMe,
  _DGCR,
  _DN,
  _DP,
  _E,
  _e,
  _EV,
  _F,
  _FGC,
  _FGCM,
  _FGCR,
  _GC,
  _GCA,
  _GCAEF,
  _GCI,
  _GCL,
  _GCl,
  _GCM,
  _GCML,
  _GCMl,
  _GCMlo,
  _GCNFF,
  _GCQEF,
  _GCRI,
  _hE,
  _IGCSF,
  _IW,
  _M,
  _m,
  _MGC,
  _MGCM,
  _MGCR,
  _MR,
  _NGCI,
  _R,
  _RFGC,
  _RFGCM,
  _RFGCR,
  _S,
  _SDBCI,
  _SE,
  _SGC,
  _SGCM,
  _SGCR,
  _Sw,
  _TDCI,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateGlobalClusterMessage = struct(
  n0,
  _CGCM,
  0,
  [_GCI, _SDBCI, _E, _EV, _DP, _DN, _SE],
  [0, 0, 0, 0, 2, 0, 2]
);
export var CreateGlobalClusterResult = struct(n0, _CGCR, 0, [_GC], [[() => GlobalCluster, 0]]);
export var DeleteGlobalClusterMessage = struct(n0, _DGCM, 0, [_GCI], [0]);
export var DeleteGlobalClusterResult = struct(n0, _DGCR, 0, [_GC], [[() => GlobalCluster, 0]]);
export var DescribeGlobalClustersMessage = struct(n0, _DGCMe, 0, [_GCI, _F, _MR, _M], [0, [() => FilterList, 0], 1, 0]);
export var FailoverGlobalClusterMessage = struct(n0, _FGCM, 0, [_GCI, _TDCI, _ADL, _Sw], [0, 0, 2, 2]);
export var FailoverGlobalClusterResult = struct(n0, _FGCR, 0, [_GC], [[() => GlobalCluster, 0]]);
export var GlobalCluster = struct(
  n0,
  _GC,
  0,
  [_GCI, _GCRI, _GCA, _S, _E, _EV, _DN, _SE, _DP, _GCM],
  [0, 0, 0, 0, 0, 0, 0, 2, 2, [() => GlobalClusterMemberList, 0]]
);
export var GlobalClusterAlreadyExistsFault = error(
  n0,
  _GCAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`GlobalClusterAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __GlobalClusterAlreadyExistsFault
);
export var GlobalClusterMember = struct(n0, _GCMl, 0, [_DBCA, _R, _IW], [0, 64 | 0, 2]);
export var GlobalClusterNotFoundFault = error(
  n0,
  _GCNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`GlobalClusterNotFoundFault`, 404],
  },
  [_m],
  [0],

  __GlobalClusterNotFoundFault
);
export var GlobalClusterQuotaExceededFault = error(
  n0,
  _GCQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`GlobalClusterQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __GlobalClusterQuotaExceededFault
);
export var GlobalClustersMessage = struct(n0, _GCMlo, 0, [_M, _GCl], [0, [() => GlobalClusterList, 0]]);
export var InvalidGlobalClusterStateFault = error(
  n0,
  _IGCSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidGlobalClusterStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidGlobalClusterStateFault
);
export var ModifyGlobalClusterMessage = struct(n0, _MGCM, 0, [_GCI, _NGCI, _DP], [0, 0, 2]);
export var ModifyGlobalClusterResult = struct(n0, _MGCR, 0, [_GC], [[() => GlobalCluster, 0]]);
export var RemoveFromGlobalClusterMessage = struct(n0, _RFGCM, 0, [_GCI, _DCI], [0, 0]);
export var RemoveFromGlobalClusterResult = struct(n0, _RFGCR, 0, [_GC], [[() => GlobalCluster, 0]]);
export var SwitchoverGlobalClusterMessage = struct(n0, _SGCM, 0, [_GCI, _TDCI], [0, 0]);
export var SwitchoverGlobalClusterResult = struct(n0, _SGCR, 0, [_GC], [[() => GlobalCluster, 0]]);
export var GlobalClusterList = list(n0, _GCL, 0, [
  () => GlobalCluster,
  {
    [_xN]: _GCMl,
  },
]);
export var GlobalClusterMemberList = list(n0, _GCML, 0, [
  () => GlobalClusterMember,
  {
    [_xN]: _GCMl,
  },
]);
export var ReadersArnList = 64 | 0;

export var CreateGlobalCluster = op(
  n0,
  _CGC,
  0,
  () => CreateGlobalClusterMessage,
  () => CreateGlobalClusterResult
);
export var DeleteGlobalCluster = op(
  n0,
  _DGC,
  0,
  () => DeleteGlobalClusterMessage,
  () => DeleteGlobalClusterResult
);
export var DescribeGlobalClusters = op(
  n0,
  _DGCe,
  0,
  () => DescribeGlobalClustersMessage,
  () => GlobalClustersMessage
);
export var FailoverGlobalCluster = op(
  n0,
  _FGC,
  0,
  () => FailoverGlobalClusterMessage,
  () => FailoverGlobalClusterResult
);
export var ModifyGlobalCluster = op(
  n0,
  _MGC,
  0,
  () => ModifyGlobalClusterMessage,
  () => ModifyGlobalClusterResult
);
export var RemoveFromGlobalCluster = op(
  n0,
  _RFGC,
  0,
  () => RemoveFromGlobalClusterMessage,
  () => RemoveFromGlobalClusterResult
);
export var SwitchoverGlobalCluster = op(
  n0,
  _SGC,
  0,
  () => SwitchoverGlobalClusterMessage,
  () => SwitchoverGlobalClusterResult
);
