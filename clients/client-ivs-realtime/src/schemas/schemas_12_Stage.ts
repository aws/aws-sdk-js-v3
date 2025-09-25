// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aSI,
  _eT,
  _GSS,
  _GSSR,
  _GSSRe,
  _ht,
  _LS,
  _LSR,
  _LSRi,
  _LSS,
  _LSSR,
  _LSSRi,
  _mR,
  _n,
  _nT,
  _sA,
  _sI,
  _SS,
  _sS,
  _SSL,
  _SSLt,
  _SSS,
  _SSt,
  _sSt,
  _sT,
  _stag,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetStageSessionRequest = struct(n0, _GSSR, 0, [_sA, _sI], [0, 0]);
export var GetStageSessionResponse = struct(n0, _GSSRe, 0, [_sS], [() => StageSession]);
export var ListStageSessionsRequest = struct(n0, _LSSR, 0, [_sA, _nT, _mR], [0, 0, 1]);
export var ListStageSessionsResponse = struct(n0, _LSSRi, 0, [_sSt, _nT], [() => StageSessionList, 0]);
export var ListStagesRequest = struct(n0, _LSR, 0, [_nT, _mR], [0, 1]);
export var ListStagesResponse = struct(n0, _LSRi, 0, [_stag, _nT], [() => StageSummaryList, 0]);
export var StageSession = struct(n0, _SS, 0, [_sI, _sT, _eT], [0, 5, 5]);
export var StageSessionSummary = struct(n0, _SSS, 0, [_sI, _sT, _eT], [0, 5, 5]);
export var StageSummary = struct(n0, _SSt, 0, [_a, _n, _aSI, _t], [0, 0, 0, 128 | 0]);
export var StageSessionList = list(n0, _SSL, 0, () => StageSessionSummary);
export var StageSummaryList = list(n0, _SSLt, 0, () => StageSummary);
export var GetStageSession = op(
  n0,
  _GSS,
  {
    [_ht]: ["POST", "/GetStageSession", 200],
  },
  () => GetStageSessionRequest,
  () => GetStageSessionResponse
);
export var ListStages = op(
  n0,
  _LS,
  {
    [_ht]: ["POST", "/ListStages", 200],
  },
  () => ListStagesRequest,
  () => ListStagesResponse
);
export var ListStageSessions = op(
  n0,
  _LSS,
  {
    [_ht]: ["POST", "/ListStageSessions", 200],
  },
  () => ListStageSessionsRequest,
  () => ListStageSessionsResponse
);
