// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aPSKKI,
  _at,
  _aU,
  _aUP,
  _CN,
  _CNR,
  _CNRr,
  _cr,
  _CRPTS,
  _CRPTSR,
  _CRPTSRo,
  _CS,
  _cS,
  _CSA,
  _CSAR,
  _CSARr,
  _CSR,
  _CSRr,
  _CSSAP,
  _dIRA,
  _dN,
  _DSA,
  _DSAR,
  _DSARe,
  _ena,
  _eT,
  _GSA,
  _GSAR,
  _GSARe,
  _iR,
  _k,
  _kKI,
  _lE,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _mAP,
  _n,
  _nIe,
  _nN,
  _rA,
  _rAe,
  _rIAA,
  _rP,
  _rPI,
  _s,
  _sA,
  _sAD,
  _sAN,
  _SAR,
  _sAU,
  _Sc,
  _sc,
  _sN,
  _sNP,
  _sT,
  _sta,
  _T,
  _t,
  _TA,
  _tA,
  _tK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _USA,
  _USAR,
  _USARp,
  _v,
  n0,
} from "./schemas_0";
import { Snapshot } from "./schemas_5_Snapshot";
import { DbPassword, DbUser } from "./schemas_6_Namespace";
import { Namespace } from "./schemas_8_Namespace";

/* eslint no-var: 0 */

export var ConvertRecoveryPointToSnapshotRequest = struct(
  n0,
  _CRPTSR,
  0,
  [_rPI, _sN, _rP, _t],
  [0, 0, 1, () => TagList]
);
export var ConvertRecoveryPointToSnapshotResponse = struct(n0, _CRPTSRo, 0, [_s], [() => Snapshot]);
export var CreateNamespaceRequest = struct(
  n0,
  _CNR,
  0,
  [_nN, _aU, _aUP, _dN, _kKI, _dIRA, _iR, _lE, _t, _mAP, _aPSKKI, _rIAA],
  [0, [() => DbUser, 0], [() => DbPassword, 0], 0, 0, 0, 64 | 0, 64 | 0, () => TagList, 2, 0, 0]
);
export var CreateNamespaceResponse = struct(n0, _CNRr, 0, [_n], [[() => Namespace, 0]]);
export var CreateScheduledActionRequest = struct(
  n0,
  _CSAR,
  0,
  [_sAN, _tA, _sc, _rA, _nN, _ena, _sAD, _sT, _eT],
  [0, () => TargetAction, () => Schedule, 0, 0, 2, 0, 4, 4]
);
export var CreateScheduledActionResponse = struct(n0, _CSARr, 0, [_sA], [() => ScheduledActionResponse]);
export var CreateSnapshotRequest = struct(n0, _CSR, 0, [_nN, _sN, _rP, _t], [0, 0, 1, () => TagList]);
export var CreateSnapshotResponse = struct(n0, _CSRr, 0, [_s], [() => Snapshot]);
export var CreateSnapshotScheduleActionParameters = struct(
  n0,
  _CSSAP,
  0,
  [_nN, _sNP, _rP, _t],
  [0, 0, 1, () => TagList]
);
export var DeleteScheduledActionRequest = struct(n0, _DSAR, 0, [_sAN], [0]);
export var DeleteScheduledActionResponse = struct(n0, _DSARe, 0, [_sA], [() => ScheduledActionResponse]);
export var GetScheduledActionRequest = struct(n0, _GSAR, 0, [_sAN], [0]);
export var GetScheduledActionResponse = struct(n0, _GSARe, 0, [_sA], [() => ScheduledActionResponse]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rAe], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [() => TagList]);
export var ScheduledActionResponse = struct(
  n0,
  _SAR,
  0,
  [_sAN, _sc, _sAD, _nIe, _rA, _sta, _sT, _eT, _tA, _nN, _sAU],
  [0, () => Schedule, 0, 64 | 4, 0, 0, 4, 4, () => TargetAction, 0, 0]
);
export var Tag = struct(n0, _T, 0, [_k, _v], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rAe, _t], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_rAe, _tK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateScheduledActionRequest = struct(
  n0,
  _USAR,
  0,
  [_sAN, _tA, _sc, _rA, _ena, _sAD, _sT, _eT],
  [0, () => TargetAction, () => Schedule, 0, 2, 0, 4, 4]
);
export var UpdateScheduledActionResponse = struct(n0, _USARp, 0, [_sA], [() => ScheduledActionResponse]);
export var NextInvocationsList = 64 | 4;

export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var Schedule = uni(n0, _Sc, 0, [_at, _cr], [4, 0]);
export var TargetAction = uni(n0, _TA, 0, [_cS], [() => CreateSnapshotScheduleActionParameters]);
export var ConvertRecoveryPointToSnapshot = op(
  n0,
  _CRPTS,
  0,
  () => ConvertRecoveryPointToSnapshotRequest,
  () => ConvertRecoveryPointToSnapshotResponse
);
export var CreateNamespace = op(
  n0,
  _CN,
  2,
  () => CreateNamespaceRequest,
  () => CreateNamespaceResponse
);
export var CreateScheduledAction = op(
  n0,
  _CSA,
  2,
  () => CreateScheduledActionRequest,
  () => CreateScheduledActionResponse
);
export var CreateSnapshot = op(
  n0,
  _CS,
  2,
  () => CreateSnapshotRequest,
  () => CreateSnapshotResponse
);
export var DeleteScheduledAction = op(
  n0,
  _DSA,
  2,
  () => DeleteScheduledActionRequest,
  () => DeleteScheduledActionResponse
);
export var GetScheduledAction = op(
  n0,
  _GSA,
  0,
  () => GetScheduledActionRequest,
  () => GetScheduledActionResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateScheduledAction = op(
  n0,
  _USA,
  2,
  () => UpdateScheduledActionRequest,
  () => UpdateScheduledActionResponse
);
