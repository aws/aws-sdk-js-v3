// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _AVIE,
  _aVIE,
  _cT,
  _d,
  _dI,
  _dVI,
  _dVSe,
  _eBE,
  _eDSIB,
  _EEM,
  _eEM,
  _eI,
  _eIn,
  _eIv,
  _EMV,
  _eMV,
  _EO,
  _eO,
  _ER,
  _ERL,
  _eS,
  _eT,
  _eTLv,
  _eTN,
  _eTn,
  _ETv,
  _eTv,
  _eTve,
  _eV,
  _ev,
  _eva,
  _eVN,
  _eVNv,
  _EVS,
  _eWV,
  _ex,
  _GEPM,
  _GEPMR,
  _GEPMRe,
  _GETe,
  _GETRet,
  _GETRetv,
  _IES,
  _iES,
  _iV,
  _la,
  _LOAVIE,
  _LOEEM,
  _LOEMV,
  _LOEVS,
  _lOI,
  _LOMVE,
  _lOVIE,
  _lRE,
  _lUT,
  _ma,
  _mE,
  _mI,
  _MOS,
  _mR,
  _mRE,
  _mT,
  _MVE,
  _mVo,
  _n,
  _nOE,
  _nT,
  _o,
  _oV,
  _oVN,
  _PE,
  _pE,
  _PETRut,
  _PETRutv,
  _PETu,
  _pT,
  _r,
  _rEM,
  _rI,
  _rIu,
  _rV,
  _so,
  _sS,
  _ta,
  _uEV,
  _va,
  _VIE,
  _vIE,
  n0,
  tagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var sensitiveString = sim(n0, _sS, 0, 8);
export var AggregatedVariablesImpactExplanation = struct(n0, _AVIE, 0, [_eVN, _rI, _lOI], [64 | 0, 0, 1]);
export var EvaluatedExternalModel = struct(
  n0,
  _EEM,
  0,
  [_mE, _uEV, _iV, _oV],
  [0, 2, [() => MapOfStrings, 0], [() => MapOfStrings, 0]]
);
export var EvaluatedModelVersion = struct(
  n0,
  _EMV,
  0,
  [_mI, _mVo, _mT, _ev],
  [0, 0, 0, () => ListOfModelVersionEvaluations]
);
export var EvaluatedRule = struct(
  n0,
  _ER,
  0,
  [_rIu, _rV, _ex, _eWV, _o, _eva, _ma],
  [0, 0, [() => sensitiveString, 0], [() => sensitiveString, 0], 64 | 0, 2, 2]
);
export var EventOrchestration = struct(n0, _EO, 0, [_eBE], [2]);
export var EventType = struct(
  n0,
  _ETv,
  8,
  [_n, _d, _eV, _la, _eTn, _eIv, _iES, _lUT, _cT, _a, _eO],
  [0, 0, 64 | 0, 64 | 0, 64 | 0, 0, () => IngestedEventStatistics, 0, 0, 0, () => EventOrchestration]
);
export var EventVariableSummary = struct(
  n0,
  _EVS,
  0,
  [_n, _va, _so],
  [
    [() => sensitiveString, 0],
    [() => sensitiveString, 0],
    [() => sensitiveString, 0],
  ]
);
export var GetEventPredictionMetadataRequest = struct(n0, _GEPMR, 0, [_eI, _eTN, _dI, _dVI, _pT], [0, 0, 0, 0, 0]);
export var GetEventPredictionMetadataResult = struct(
  n0,
  _GEPMRe,
  0,
  [_eI, _eTN, _eIn, _eT, _eTv, _dI, _dVI, _dVSe, _eV, _r, _rEM, _o, _eMV, _eEM, _pT],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => ListOfEventVariableSummaries, 0],
    [() => EvaluatedRuleList, 0],
    0,
    64 | 0,
    () => ListOfEvaluatedModelVersions,
    [() => ListOfEvaluatedExternalModels, 0],
    0,
  ]
);
export var GetEventTypesRequest = struct(n0, _GETRet, 0, [_n, _nT, _mR], [0, 0, 1]);
export var GetEventTypesResult = struct(n0, _GETRetv, 0, [_eTve, _nT], [[() => eventTypeList, 0], 0]);
export var IngestedEventStatistics = struct(n0, _IES, 0, [_nOE, _eDSIB, _lRE, _mRE, _lUT], [1, 1, 0, 0, 0]);
export var ModelVersionEvaluation = struct(n0, _MVE, 0, [_oVN, _eS, _pE], [0, 0, () => PredictionExplanations]);
export var PredictionExplanations = struct(
  n0,
  _PE,
  0,
  [_vIE, _aVIE],
  [() => listOfVariableImpactExplanations, () => ListOfAggregatedVariablesImpactExplanations]
);
export var PutEventTypeRequest = struct(
  n0,
  _PETRut,
  0,
  [_n, _d, _eV, _la, _eTn, _eIv, _ta, _eO],
  [0, 0, 64 | 0, 64 | 0, 64 | 0, 0, () => tagList, () => EventOrchestration]
);
export var PutEventTypeResult = struct(n0, _PETRutv, 0, [], []);
export var VariableImpactExplanation = struct(n0, _VIE, 0, [_eVNv, _rI, _lOI], [0, 0, 1]);
export var EvaluatedRuleList = list(n0, _ERL, 0, [() => EvaluatedRule, 0]);
export var eventTypeList = list(n0, _eTLv, 0, [() => EventType, 0]);
export var ListOfAggregatedVariablesImpactExplanations = list(
  n0,
  _LOAVIE,
  0,
  () => AggregatedVariablesImpactExplanation
);
export var ListOfEvaluatedExternalModels = list(n0, _LOEEM, 0, [() => EvaluatedExternalModel, 0]);
export var ListOfEvaluatedModelVersions = list(n0, _LOEMV, 0, () => EvaluatedModelVersion);
export var ListOfEventVariableSummaries = list(n0, _LOEVS, 0, [() => EventVariableSummary, 0]);
export var ListOfModelVersionEvaluations = list(n0, _LOMVE, 0, () => ModelVersionEvaluation);
export var ListOfStrings = 64 | 0;

export var listOfVariableImpactExplanations = list(n0, _lOVIE, 0, () => VariableImpactExplanation);
export var MapOfStrings = map(n0, _MOS, 8, 0, 0);
export var GetEventPredictionMetadata = op(
  n0,
  _GEPM,
  0,
  () => GetEventPredictionMetadataRequest,
  () => GetEventPredictionMetadataResult
);
export var GetEventTypes = op(
  n0,
  _GETe,
  0,
  () => GetEventTypesRequest,
  () => GetEventTypesResult
);
export var PutEventType = op(
  n0,
  _PETu,
  0,
  () => PutEventTypeRequest,
  () => PutEventTypeResult
);
