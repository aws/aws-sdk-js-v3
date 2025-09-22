// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessToSnapshotDeniedFault as __AccessToSnapshotDeniedFault,
  ClusterSnapshotNotFoundFault as __ClusterSnapshotNotFoundFault,
  InProgressTableRestoreQuotaExceededFault as __InProgressTableRestoreQuotaExceededFault,
  InvalidClusterSnapshotStateFault as __InvalidClusterSnapshotStateFault,
  InvalidTableRestoreArgumentFault as __InvalidTableRestoreArgumentFault,
} from "../models/index";
import {
  _aQE,
  _ASA,
  _ASAM,
  _ASAR,
  _AT,
  _At,
  _ATSDF,
  _AWRA,
  _c,
  _CCS,
  _CCSM,
  _CCSR,
  _CE,
  _CIl,
  _CSNFF,
  _DCS,
  _DCSe,
  _DCSMe,
  _DCSR,
  _DNCO,
  _DNCOM,
  _e,
  _ECSI,
  _EDUP,
  _ET,
  _F,
  _Fi,
  _Fil,
  _hE,
  _ICSSF,
  _IPTRQEF,
  _ITRAF,
  _M,
  _m,
  _MCS,
  _MCSM,
  _MCSR,
  _Mo,
  _MR,
  _MSRP,
  _N,
  _NCO,
  _NCOF,
  _NCOFL,
  _NCOL,
  _NCOM,
  _NON,
  _NT,
  _NTN,
  _O,
  _OA,
  _RSA,
  _RSAM,
  _RSAR,
  _RTFCS,
  _RTFCSM,
  _RTFCSR,
  _S,
  _SA,
  _SCI,
  _SDN,
  _SE,
  _SI,
  _SL,
  _SMn,
  _Sn,
  _SO,
  _SSCI,
  _SSE,
  _SSEL,
  _SSIo,
  _SSN,
  _STN,
  _STn,
  _STt,
  _TDN,
  _TK,
  _TRS,
  _TSI,
  _TSN,
  _TV,
  _V,
  _Va,
  _xN,
  n0,
  TagKeyList,
} from "./schemas_0";
import { TableRestoreStatus } from "./schemas_28_Table";
import { ValueStringList } from "./schemas_39_Describe";
import { TagValueList } from "./schemas_65_Describe";
import { DeleteClusterSnapshotMessage } from "./schemas_66_Delete";
import { Snapshot } from "./schemas_70_Snapshot";

/* eslint no-var: 0 */

export var AccessToSnapshotDeniedFault = error(
  n0,
  _ATSDF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AccessToSnapshotDenied`, 400],
  },
  [_m],
  [0],

  __AccessToSnapshotDeniedFault
);
export var AuthorizeSnapshotAccessMessage = struct(n0, _ASAM, 0, [_SI, _SA, _SCI, _AWRA], [0, 0, 0, 0]);
export var AuthorizeSnapshotAccessResult = struct(n0, _ASAR, 0, [_S], [[() => Snapshot, 0]]);
export var ClusterSnapshotNotFoundFault = error(
  n0,
  _CSNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ClusterSnapshotNotFound`, 404],
  },
  [_m],
  [0],

  __ClusterSnapshotNotFoundFault
);
export var CopyClusterSnapshotMessage = struct(n0, _CCSM, 0, [_SSIo, _SSCI, _TSI, _MSRP], [0, 0, 0, 1]);
export var CopyClusterSnapshotResult = struct(n0, _CCSR, 0, [_S], [[() => Snapshot, 0]]);
export var DeleteClusterSnapshotResult = struct(n0, _DCSR, 0, [_S], [[() => Snapshot, 0]]);
export var DescribeClusterSnapshotsMessage = struct(
  n0,
  _DCSMe,
  0,
  [_CIl, _SI, _SA, _STn, _STt, _ET, _MR, _M, _OA, _TK, _TV, _CE, _SE],
  [0, 0, 0, 0, 4, 4, 1, 0, 0, [() => TagKeyList, 0], [() => TagValueList, 0], 2, [() => SnapshotSortingEntityList, 0]]
);
export var DescribeNodeConfigurationOptionsMessage = struct(
  n0,
  _DNCOM,
  0,
  [_AT, _CIl, _SI, _SA, _OA, _Fi, _M, _MR],
  [
    0,
    0,
    0,
    0,
    0,
    [
      () => NodeConfigurationOptionsFilterList,
      {
        [_xN]: _Fil,
      },
    ],
    0,
    1,
  ]
);
export var InProgressTableRestoreQuotaExceededFault = error(
  n0,
  _IPTRQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InProgressTableRestoreQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __InProgressTableRestoreQuotaExceededFault
);
export var InvalidClusterSnapshotStateFault = error(
  n0,
  _ICSSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidClusterSnapshotState`, 400],
  },
  [_m],
  [0],

  __InvalidClusterSnapshotStateFault
);
export var InvalidTableRestoreArgumentFault = error(
  n0,
  _ITRAF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidTableRestoreArgument`, 400],
  },
  [_m],
  [0],

  __InvalidTableRestoreArgumentFault
);
export var ModifyClusterSnapshotMessage = struct(n0, _MCSM, 0, [_SI, _MSRP, _F], [0, 1, 2]);
export var ModifyClusterSnapshotResult = struct(n0, _MCSR, 0, [_S], [[() => Snapshot, 0]]);
export var NodeConfigurationOption = struct(n0, _NCO, 0, [_NT, _NON, _EDUP, _Mo], [0, 1, 1, 0]);
export var NodeConfigurationOptionsFilter = struct(
  n0,
  _NCOF,
  0,
  [_N, _O, _V],
  [
    0,
    0,
    [
      () => ValueStringList,
      {
        [_xN]: _Va,
      },
    ],
  ]
);
export var NodeConfigurationOptionsMessage = struct(
  n0,
  _NCOM,
  0,
  [_NCOL, _M],
  [[() => NodeConfigurationOptionList, 0], 0]
);
export var RestoreTableFromClusterSnapshotMessage = struct(
  n0,
  _RTFCSM,
  0,
  [_CIl, _SI, _SDN, _SSN, _STN, _TDN, _TSN, _NTN, _ECSI],
  [0, 0, 0, 0, 0, 0, 0, 0, 2]
);
export var RestoreTableFromClusterSnapshotResult = struct(n0, _RTFCSR, 0, [_TRS], [() => TableRestoreStatus]);
export var RevokeSnapshotAccessMessage = struct(n0, _RSAM, 0, [_SI, _SA, _SCI, _AWRA], [0, 0, 0, 0]);
export var RevokeSnapshotAccessResult = struct(n0, _RSAR, 0, [_S], [[() => Snapshot, 0]]);
export var SnapshotMessage = struct(n0, _SMn, 0, [_M, _Sn], [0, [() => SnapshotList, 0]]);
export var SnapshotSortingEntity = struct(n0, _SSE, 0, [_At, _SO], [0, 0]);
export var NodeConfigurationOptionList = list(n0, _NCOL, 0, [
  () => NodeConfigurationOption,
  {
    [_xN]: _NCO,
  },
]);
export var NodeConfigurationOptionsFilterList = list(n0, _NCOFL, 0, [
  () => NodeConfigurationOptionsFilter,
  {
    [_xN]: _NCOF,
  },
]);
export var SnapshotList = list(n0, _SL, 0, [
  () => Snapshot,
  {
    [_xN]: _S,
  },
]);
export var SnapshotSortingEntityList = list(n0, _SSEL, 0, [
  () => SnapshotSortingEntity,
  {
    [_xN]: _SSE,
  },
]);
export var AuthorizeSnapshotAccess = op(
  n0,
  _ASA,
  0,
  () => AuthorizeSnapshotAccessMessage,
  () => AuthorizeSnapshotAccessResult
);
export var CopyClusterSnapshot = op(
  n0,
  _CCS,
  0,
  () => CopyClusterSnapshotMessage,
  () => CopyClusterSnapshotResult
);
export var DeleteClusterSnapshot = op(
  n0,
  _DCS,
  0,
  () => DeleteClusterSnapshotMessage,
  () => DeleteClusterSnapshotResult
);
export var DescribeClusterSnapshots = op(
  n0,
  _DCSe,
  0,
  () => DescribeClusterSnapshotsMessage,
  () => SnapshotMessage
);
export var DescribeNodeConfigurationOptions = op(
  n0,
  _DNCO,
  0,
  () => DescribeNodeConfigurationOptionsMessage,
  () => NodeConfigurationOptionsMessage
);
export var ModifyClusterSnapshot = op(
  n0,
  _MCS,
  0,
  () => ModifyClusterSnapshotMessage,
  () => ModifyClusterSnapshotResult
);
export var RestoreTableFromClusterSnapshot = op(
  n0,
  _RTFCS,
  0,
  () => RestoreTableFromClusterSnapshotMessage,
  () => RestoreTableFromClusterSnapshotResult
);
export var RevokeSnapshotAccess = op(
  n0,
  _RSA,
  0,
  () => RevokeSnapshotAccessMessage,
  () => RevokeSnapshotAccessResult
);
