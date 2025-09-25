// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _aAl,
  _aAs,
  _aCI,
  _aCN,
  _aCNp,
  _aIl,
  _AR,
  _ARL,
  _aRl,
  _d,
  _dA,
  _dOA,
  _E,
  _eA,
  _eR,
  _eTI,
  _ex,
  _h,
  _i,
  _int,
  _LARis,
  _LARR,
  _LARRi,
  _lDE,
  _LSR,
  _LSRR,
  _LSRRi,
  _LTR,
  _LTRR,
  _LTRRi,
  _mR,
  _n,
  _nT,
  _p,
  _r,
  _RI,
  _rI,
  _rIe,
  _rIes,
  _RIL,
  _rS,
  _s,
  _SR,
  _sR,
  _SRL,
  _sTe,
  _t,
  _tAI,
  _TR,
  _tR,
  _tRa,
  _TRL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Alarm = struct(n0, _A, 0, [_aAl, _s], [0, 0]);
export var AlarmRecommendation = struct(
  n0,
  _AR,
  0,
  [_rI, _rIe, _n, _d, _t, _aCN, _i, _p, _aCNp, _rS],
  [0, 0, 0, 0, 0, 0, () => RecommendationItemList, 0, 64 | 0, 0]
);
export var Experiment = struct(n0, _E, 0, [_eA, _eTI], [0, 0]);
export var ListAlarmRecommendationsRequest = struct(n0, _LARR, 0, [_aAs, _nT, _mR], [0, 0, 1]);
export var ListAlarmRecommendationsResponse = struct(n0, _LARRi, 0, [_aRl, _nT], [() => AlarmRecommendationList, 0]);
export var ListSopRecommendationsRequest = struct(n0, _LSRR, 0, [_nT, _mR, _aAs], [0, 1, 0]);
export var ListSopRecommendationsResponse = struct(n0, _LSRRi, 0, [_nT, _sR], [0, () => SopRecommendationList]);
export var ListTestRecommendationsRequest = struct(n0, _LTRR, 0, [_nT, _mR, _aAs], [0, 1, 0]);
export var ListTestRecommendationsResponse = struct(n0, _LTRRi, 0, [_nT, _tR], [0, () => TestRecommendationList]);
export var RecommendationItem = struct(
  n0,
  _RI,
  0,
  [_rIes, _tAI, _tRa, _aIl, _ex, _eR, _lDE, _dA],
  [0, 0, 0, 2, 2, 0, () => Experiment, () => Alarm]
);
export var SopRecommendation = struct(
  n0,
  _SR,
  0,
  [_sTe, _aCN, _d, _rI, _n, _i, _rIe, _p, _rS],
  [0, 0, 0, 0, 0, () => RecommendationItemList, 0, 0, 0]
);
export var TestRecommendation = struct(
  n0,
  _TR,
  0,
  [_rI, _rIe, _aCI, _aCN, _n, _int, _r, _t, _d, _i, _p, _dOA, _rS],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, () => RecommendationItemList, 0, 64 | 0, 0]
);
export var AlarmRecommendationList = list(n0, _ARL, 0, () => AlarmRecommendation);
export var AlarmReferenceIdList = 64 | 0;

export var RecommendationItemList = list(n0, _RIL, 0, () => RecommendationItem);
export var SopRecommendationList = list(n0, _SRL, 0, () => SopRecommendation);
export var TestRecommendationList = list(n0, _TRL, 0, () => TestRecommendation);
export var ListAlarmRecommendations = op(
  n0,
  _LARis,
  {
    [_h]: ["POST", "/list-alarm-recommendations", 200],
  },
  () => ListAlarmRecommendationsRequest,
  () => ListAlarmRecommendationsResponse
);
export var ListSopRecommendations = op(
  n0,
  _LSR,
  {
    [_h]: ["POST", "/list-sop-recommendations", 200],
  },
  () => ListSopRecommendationsRequest,
  () => ListSopRecommendationsResponse
);
export var ListTestRecommendations = op(
  n0,
  _LTR,
  {
    [_h]: ["POST", "/list-test-recommendations", 200],
  },
  () => ListTestRecommendationsRequest,
  () => ListTestRecommendationsResponse
);
