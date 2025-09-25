// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aCT,
  _ar,
  _bS,
  _co,
  _cT,
  _cTN,
  _d,
  _dC,
  _de,
  _EE,
  _eIK,
  _ELx,
  _eP,
  _ERD,
  _ERDL,
  _ERLx,
  _ERx,
  _ES,
  _eT,
  _eTn,
  _Ex,
  _ex,
  _exe,
  _exp,
  _fV,
  _GE,
  _GER,
  _GERe,
  _GERet,
  _GERR,
  _GERRe,
  _h,
  _hQ,
  _LEi,
  _LER,
  _LERi,
  _lUT,
  _MD,
  _mD,
  _MG,
  _mG,
  _MGL,
  _mN,
  _mNe,
  _mR,
  _n,
  _nT,
  _OAD,
  _oAD,
  _p,
  _pe,
  _rD,
  _rep,
  _rN,
  _rNe,
  _rS,
  _rSe,
  _rSes,
  _s,
  _sc,
  _sR,
  _sRt,
  _sT,
  _st,
  _sTt,
  _T,
  _t,
  _ta,
  _tim,
  _TL,
  _tN,
  _tNr,
  _tW,
  _ty,
  _uL,
  _valu,
  _vK,
  JsonValue,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Experiment = struct(
  n0,
  _Ex,
  0,
  [_ar, _n, _p, _st, _sRt, _d, _cT, _lUT, _sc, _exe, _t, _mG, _rS, _sR, _s, _ty, _oAD, _ta],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    () => ExperimentSchedule,
    () => ExperimentExecution,
    () => TreatmentList,
    [() => MetricGoalsList, 0],
    0,
    1,
    0,
    0,
    () => OnlineAbDefinition,
    128 | 0,
  ]
);
export var ExperimentExecution = struct(n0, _EE, 0, [_sT, _eT], [4, 4]);
export var ExperimentReport = struct(n0, _ERx, 0, [_mN, _tN, _rN, _co], [0, 0, 0, [() => JsonValue, 0]]);
export var ExperimentResultsData = struct(n0, _ERD, 0, [_mN, _tN, _rSe, _valu], [0, 0, 0, 64 | 1]);
export var ExperimentSchedule = struct(n0, _ES, 0, [_aCT], [4]);
export var GetExperimentRequest = struct(
  n0,
  _GER,
  0,
  [_p, _ex],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetExperimentResponse = struct(n0, _GERe, 0, [_ex], [[() => Experiment, 0]]);
export var GetExperimentResultsRequest = struct(
  n0,
  _GERR,
  0,
  [_p, _ex, _sTt, _eTn, _mNe, _tNr, _bS, _rSes, _rNe, _pe],
  [[0, 1], [0, 1], 4, 4, 64 | 0, 64 | 0, 0, 64 | 0, 64 | 0, 1]
);
export var GetExperimentResultsResponse = struct(
  n0,
  _GERRe,
  0,
  [_rD, _rep, _tim, _de],
  [() => ExperimentResultsDataList, [() => ExperimentReportList, 0], 64 | 4, 0]
);
export var ListExperimentsRequest = struct(
  n0,
  _LER,
  0,
  [_p, _mR, _nT, _st],
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
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
  ]
);
export var ListExperimentsResponse = struct(n0, _LERi, 0, [_exp, _nT], [[() => ExperimentList, 0], 0]);
export var MetricDefinition = struct(n0, _MD, 0, [_n, _eIK, _vK, _eP, _uL], [0, 0, 0, [() => JsonValue, 0], 0]);
export var MetricGoal = struct(n0, _MG, 0, [_mD, _dC], [[() => MetricDefinition, 0], 0]);
export var OnlineAbDefinition = struct(n0, _OAD, 0, [_cTN, _tW], [0, 128 | 1]);
export var Treatment = struct(n0, _T, 0, [_n, _d, _fV], [0, 0, 128 | 0]);
export var DoubleValueList = 64 | 1;

export var ExperimentList = list(n0, _ELx, 0, [() => Experiment, 0]);
export var ExperimentReportList = list(n0, _ERLx, 0, [() => ExperimentReport, 0]);
export var ExperimentReportNameList = 64 | 0;

export var ExperimentResultRequestTypeList = 64 | 0;

export var ExperimentResultsDataList = list(n0, _ERDL, 0, () => ExperimentResultsData);
export var MetricGoalsList = list(n0, _MGL, 0, [() => MetricGoal, 0]);
export var MetricNameList = 64 | 0;

export var TimestampList = 64 | 4;

export var TreatmentList = list(n0, _TL, 0, () => Treatment);
export var TreatmentNameList = 64 | 0;

export var FeatureToVariationMap = 128 | 0;

export var TreatmentToWeightMap = 128 | 1;

export var GetExperiment = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/projects/{project}/experiments/{experiment}", 200],
  },
  () => GetExperimentRequest,
  () => GetExperimentResponse
);
export var GetExperimentResults = op(
  n0,
  _GERet,
  {
    [_h]: ["POST", "/projects/{project}/experiments/{experiment}/results", 200],
  },
  () => GetExperimentResultsRequest,
  () => GetExperimentResultsResponse
);
export var ListExperiments = op(
  n0,
  _LEi,
  {
    [_h]: ["GET", "/projects/{project}/experiments", 200],
  },
  () => ListExperimentsRequest,
  () => ListExperimentsResponse
);
