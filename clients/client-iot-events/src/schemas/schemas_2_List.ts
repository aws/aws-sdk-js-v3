// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aMA,
  _aMD,
  _aMN,
  _AMS,
  _aMS,
  _AMSl,
  _aMV,
  _AMVS,
  _aMVS,
  _AMVSl,
  _ARL,
  _ARLn,
  _ARn,
  _aRn,
  _ARna,
  _cTr,
  _GDMAR,
  _GDMARR,
  _GDMARRe,
  _h,
  _hQ,
  _iA,
  _iD,
  _iN,
  _IS,
  _iS,
  _ISn,
  _LAM,
  _LAMR,
  _LAMRi,
  _LAMV,
  _LAMVR,
  _LAMVRi,
  _le,
  _LI,
  _LIR,
  _LIRi,
  _lo,
  _lUT,
  _m,
  _mR,
  _nT,
  _p,
  _rA,
  _sM,
  _st,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AlarmModelSummary = struct(n0, _AMS, 0, [_cTr, _aMD, _aMN], [4, 0, 0]);
export var AlarmModelVersionSummary = struct(
  n0,
  _AMVS,
  0,
  [_aMN, _aMA, _aMV, _rA, _cTr, _lUT, _st, _sM],
  [0, 0, 0, 0, 4, 4, 0, 0]
);
export var AnalysisResult = struct(n0, _ARn, 0, [_t, _le, _m, _lo], [0, 0, 0, () => AnalysisResultLocations]);
export var AnalysisResultLocation = struct(n0, _ARL, 0, [_p], [0]);
export var GetDetectorModelAnalysisResultsRequest = struct(
  n0,
  _GDMARR,
  0,
  [_aI, _nT, _mR],
  [
    [0, 1],
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
export var GetDetectorModelAnalysisResultsResponse = struct(n0, _GDMARRe, 0, [_aRn, _nT], [() => AnalysisResults, 0]);
export var InputSummary = struct(n0, _IS, 0, [_iN, _iD, _iA, _cTr, _lUT, _st], [0, 0, 0, 4, 4, 0]);
export var ListAlarmModelsRequest = struct(
  n0,
  _LAMR,
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
export var ListAlarmModelsResponse = struct(n0, _LAMRi, 0, [_aMS, _nT], [() => AlarmModelSummaries, 0]);
export var ListAlarmModelVersionsRequest = struct(
  n0,
  _LAMVR,
  0,
  [_aMN, _nT, _mR],
  [
    [0, 1],
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
export var ListAlarmModelVersionsResponse = struct(n0, _LAMVRi, 0, [_aMVS, _nT], [() => AlarmModelVersionSummaries, 0]);
export var ListInputsRequest = struct(
  n0,
  _LIR,
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
export var ListInputsResponse = struct(n0, _LIRi, 0, [_iS, _nT], [() => InputSummaries, 0]);
export var AlarmModelSummaries = list(n0, _AMSl, 0, () => AlarmModelSummary);
export var AlarmModelVersionSummaries = list(n0, _AMVSl, 0, () => AlarmModelVersionSummary);
export var AnalysisResultLocations = list(n0, _ARLn, 0, () => AnalysisResultLocation);
export var AnalysisResults = list(n0, _ARna, 0, () => AnalysisResult);
export var InputSummaries = list(n0, _ISn, 0, () => InputSummary);
export var GetDetectorModelAnalysisResults = op(
  n0,
  _GDMAR,
  {
    [_h]: ["GET", "/analysis/detector-models/{analysisId}/results", 200],
  },
  () => GetDetectorModelAnalysisResultsRequest,
  () => GetDetectorModelAnalysisResultsResponse
);
export var ListAlarmModels = op(
  n0,
  _LAM,
  {
    [_h]: ["GET", "/alarm-models", 200],
  },
  () => ListAlarmModelsRequest,
  () => ListAlarmModelsResponse
);
export var ListAlarmModelVersions = op(
  n0,
  _LAMV,
  {
    [_h]: ["GET", "/alarm-models/{alarmModelName}/versions", 200],
  },
  () => ListAlarmModelVersionsRequest,
  () => ListAlarmModelVersionsResponse
);
export var ListInputs = op(
  n0,
  _LI,
  {
    [_h]: ["GET", "/inputs", 200],
  },
  () => ListInputsRequest,
  () => ListInputsResponse
);
