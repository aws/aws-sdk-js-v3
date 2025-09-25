// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _CL,
  _CLR,
  _CLRr,
  _co,
  _cT,
  _CTG,
  _CTGR,
  _CTGRr,
  _dAe,
  _DT,
  _DTR,
  _DTRe,
  _en,
  _fC,
  _fM,
  _GL,
  _GLR,
  _GLRe,
  _GTG,
  _GTGR,
  _GTGRe,
  _h,
  _hC,
  _HCC,
  _hCIS,
  _hCt,
  _hCTS,
  _hQ,
  _hTC,
  _i,
  _iAT,
  _it,
  _lESV,
  _lI,
  _LL,
  _LLR,
  _LLRi,
  _LS,
  _LSL,
  _LT,
  _LTG,
  _LTGR,
  _LTGRi,
  _LTR,
  _LTRi,
  _lUA,
  _M,
  _mat,
  _mR,
  _n,
  _nT,
  _p,
  _pa,
  _po,
  _pV,
  _rC,
  _RT,
  _RTR,
  _RTRe,
  _s,
  _sA,
  _sAe,
  _sI,
  _sIe,
  _st,
  _T,
  _t,
  _ta,
  _TF,
  _TFL,
  _TGC,
  _tGI,
  _TGL,
  _TGS,
  _tGT,
  _TL,
  _TS,
  _TSL,
  _ty,
  _u,
  _UL,
  _ULR,
  _ULRp,
  _uTC,
  _UTG,
  _UTGR,
  _UTGRp,
  _vI,
  n0,
} from "./schemas_0";
import { RuleAction } from "./schemas_13_Rule";

/* eslint no-var: 0 */

export var CreateListenerRequest = struct(
  n0,
  _CLR,
  0,
  [_sI, _n, _p, _po, _dAe, _cT, _t],
  [[0, 1], 0, 0, 1, () => RuleAction, [0, 4], 128 | 0]
);
export var CreateListenerResponse = struct(
  n0,
  _CLRr,
  0,
  [_a, _i, _n, _p, _po, _sA, _sIe, _dAe],
  [0, 0, 0, 0, 1, 0, 0, () => RuleAction]
);
export var CreateTargetGroupRequest = struct(
  n0,
  _CTGR,
  0,
  [_n, _ty, _co, _cT, _t],
  [0, 0, () => TargetGroupConfig, [0, 4], 128 | 0]
);
export var CreateTargetGroupResponse = struct(
  n0,
  _CTGRr,
  0,
  [_i, _a, _n, _ty, _co, _st],
  [0, 0, 0, 0, () => TargetGroupConfig, 0]
);
export var DeregisterTargetsRequest = struct(n0, _DTR, 0, [_tGI, _ta], [[0, 1], () => TargetList]);
export var DeregisterTargetsResponse = struct(n0, _DTRe, 0, [_s, _u], [() => TargetList, () => TargetFailureList]);
export var GetListenerRequest = struct(
  n0,
  _GLR,
  0,
  [_sI, _lI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetListenerResponse = struct(
  n0,
  _GLRe,
  0,
  [_a, _i, _n, _p, _po, _sA, _sIe, _dAe, _cA, _lUA],
  [0, 0, 0, 0, 1, 0, 0, () => RuleAction, 5, 5]
);
export var GetTargetGroupRequest = struct(n0, _GTGR, 0, [_tGI], [[0, 1]]);
export var GetTargetGroupResponse = struct(
  n0,
  _GTGRe,
  0,
  [_i, _a, _n, _ty, _co, _cA, _lUA, _st, _sAe, _fM, _fC],
  [0, 0, 0, 0, () => TargetGroupConfig, 5, 5, 0, 64 | 0, 0, 0]
);
export var HealthCheckConfig = struct(
  n0,
  _HCC,
  0,
  [_en, _p, _pV, _po, _pa, _hCIS, _hCTS, _hTC, _uTC, _mat],
  [2, 0, 0, 1, 0, 1, 1, 1, 1, () => Matcher]
);
export var ListenerSummary = struct(n0, _LS, 0, [_a, _i, _n, _p, _po, _cA, _lUA], [0, 0, 0, 0, 1, 5, 5]);
export var ListListenersRequest = struct(
  n0,
  _LLR,
  0,
  [_sI, _mR, _nT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListListenersResponse = struct(n0, _LLRi, 0, [_it, _nT], [() => ListenerSummaryList, 0]);
export var ListTargetGroupsRequest = struct(
  n0,
  _LTGR,
  0,
  [_mR, _nT, _vI, _tGT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
    [
      0,
      {
        [_hQ]: _tGT,
      },
    ],
  ]
);
export var ListTargetGroupsResponse = struct(n0, _LTGRi, 0, [_it, _nT], [() => TargetGroupList, 0]);
export var ListTargetsRequest = struct(
  n0,
  _LTR,
  0,
  [_tGI, _mR, _nT, _ta],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    () => TargetList,
  ]
);
export var ListTargetsResponse = struct(n0, _LTRi, 0, [_it, _nT], [() => TargetSummaryList, 0]);
export var RegisterTargetsRequest = struct(n0, _RTR, 0, [_tGI, _ta], [[0, 1], () => TargetList]);
export var RegisterTargetsResponse = struct(n0, _RTRe, 0, [_s, _u], [() => TargetList, () => TargetFailureList]);
export var Target = struct(n0, _T, 0, [_i, _po], [0, 1]);
export var TargetFailure = struct(n0, _TF, 0, [_i, _po, _fC, _fM], [0, 1, 0, 0]);
export var TargetGroupConfig = struct(
  n0,
  _TGC,
  0,
  [_po, _p, _pV, _iAT, _vI, _hC, _lESV],
  [1, 0, 0, 0, 0, () => HealthCheckConfig, 0]
);
export var TargetGroupSummary = struct(
  n0,
  _TGS,
  0,
  [_i, _a, _n, _ty, _cA, _po, _p, _iAT, _vI, _lUA, _st, _sAe, _lESV],
  [0, 0, 0, 0, 5, 1, 0, 0, 0, 5, 0, 64 | 0, 0]
);
export var TargetSummary = struct(n0, _TS, 0, [_i, _po, _st, _rC], [0, 1, 0, 0]);
export var UpdateListenerRequest = struct(n0, _ULR, 0, [_sI, _lI, _dAe], [[0, 1], [0, 1], () => RuleAction]);
export var UpdateListenerResponse = struct(
  n0,
  _ULRp,
  0,
  [_a, _i, _n, _p, _po, _sA, _sIe, _dAe],
  [0, 0, 0, 0, 1, 0, 0, () => RuleAction]
);
export var UpdateTargetGroupRequest = struct(n0, _UTGR, 0, [_tGI, _hC], [[0, 1], () => HealthCheckConfig]);
export var UpdateTargetGroupResponse = struct(
  n0,
  _UTGRp,
  0,
  [_i, _a, _n, _ty, _co, _st],
  [0, 0, 0, 0, () => TargetGroupConfig, 0]
);
export var ListenerSummaryList = list(n0, _LSL, 0, () => ListenerSummary);
export var ServiceArnList = 64 | 0;

export var TargetFailureList = list(n0, _TFL, 0, () => TargetFailure);
export var TargetGroupList = list(n0, _TGL, 0, () => TargetGroupSummary);
export var TargetList = list(n0, _TL, 0, () => Target);
export var TargetSummaryList = list(n0, _TSL, 0, () => TargetSummary);
export var Matcher = uni(n0, _M, 0, [_hCt], [0]);
export var CreateListener = op(
  n0,
  _CL,
  {
    [_h]: ["POST", "/services/{serviceIdentifier}/listeners", 201],
  },
  () => CreateListenerRequest,
  () => CreateListenerResponse
);
export var CreateTargetGroup = op(
  n0,
  _CTG,
  {
    [_h]: ["POST", "/targetgroups", 201],
  },
  () => CreateTargetGroupRequest,
  () => CreateTargetGroupResponse
);
export var DeregisterTargets = op(
  n0,
  _DT,
  {
    [_h]: ["POST", "/targetgroups/{targetGroupIdentifier}/deregistertargets", 200],
  },
  () => DeregisterTargetsRequest,
  () => DeregisterTargetsResponse
);
export var GetListener = op(
  n0,
  _GL,
  {
    [_h]: ["GET", "/services/{serviceIdentifier}/listeners/{listenerIdentifier}", 200],
  },
  () => GetListenerRequest,
  () => GetListenerResponse
);
export var GetTargetGroup = op(
  n0,
  _GTG,
  {
    [_h]: ["GET", "/targetgroups/{targetGroupIdentifier}", 200],
  },
  () => GetTargetGroupRequest,
  () => GetTargetGroupResponse
);
export var ListListeners = op(
  n0,
  _LL,
  {
    [_h]: ["GET", "/services/{serviceIdentifier}/listeners", 200],
  },
  () => ListListenersRequest,
  () => ListListenersResponse
);
export var ListTargetGroups = op(
  n0,
  _LTG,
  {
    [_h]: ["GET", "/targetgroups", 200],
  },
  () => ListTargetGroupsRequest,
  () => ListTargetGroupsResponse
);
export var ListTargets = op(
  n0,
  _LT,
  {
    [_h]: ["POST", "/targetgroups/{targetGroupIdentifier}/listtargets", 200],
  },
  () => ListTargetsRequest,
  () => ListTargetsResponse
);
export var RegisterTargets = op(
  n0,
  _RT,
  {
    [_h]: ["POST", "/targetgroups/{targetGroupIdentifier}/registertargets", 200],
  },
  () => RegisterTargetsRequest,
  () => RegisterTargetsResponse
);
export var UpdateListener = op(
  n0,
  _UL,
  {
    [_h]: ["PATCH", "/services/{serviceIdentifier}/listeners/{listenerIdentifier}", 200],
  },
  () => UpdateListenerRequest,
  () => UpdateListenerResponse
);
export var UpdateTargetGroup = op(
  n0,
  _UTG,
  {
    [_h]: ["PATCH", "/targetgroups/{targetGroupIdentifier}", 200],
  },
  () => UpdateTargetGroupRequest,
  () => UpdateTargetGroupResponse
);
