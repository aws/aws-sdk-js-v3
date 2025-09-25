// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { ResourceUnavailableException as __ResourceUnavailableException } from "../models/index";
import {
  _a,
  _ad,
  _ALOM,
  _as,
  _at,
  _ati,
  _ATIMDP,
  _ATIMDPL,
  _ATIMP,
  _ATITMV,
  _au,
  _aVI,
  _AVIM,
  _aVIM,
  _bB,
  _BP,
  _bP,
  _BPL,
  _c,
  _CDV,
  _CDVR,
  _CDVRr,
  _CMV,
  _CMVR,
  _CMVRr,
  _con,
  _cr,
  _cT,
  _cTo,
  _cTon,
  _d,
  _dARA,
  _dI,
  _dL,
  _DMV,
  _DMVe,
  _DMVR,
  _DMVRe,
  _DMVRes,
  _DMVResc,
  _dN,
  _dV,
  _dVI,
  _DVM,
  _dVM,
  _e,
  _EED,
  _eED,
  _eI,
  _eM,
  _eME,
  _eMEDB,
  _EMEDBM,
  _EMO,
  _eMO,
  _EMS,
  _en,
  _eTN,
  _eTnd,
  _eTv,
  _eV,
  _f,
  _fLM,
  _fLMi,
  _fN,
  _fR,
  _FVM,
  _FVMi,
  _fVML,
  _fVMLi,
  _GBPJ,
  _GBPJR,
  _GBPJRe,
  _GDV,
  _GDVR,
  _GDVRe,
  _GEP,
  _GEPR,
  _GEPRe,
  _GMV,
  _GMVR,
  _GMVRe,
  _hE,
  _i,
  _IED,
  _iED,
  _IETW,
  _iETW,
  _iP,
  _iRA,
  _jI,
  _lBV,
  _lHT,
  _lM,
  _LOALOM,
  _LOEMO,
  _LOLOM,
  _LOM,
  _lOM,
  _LOMS,
  _LOMV,
  _LORR,
  _LS,
  _lS,
  _lUT,
  _m,
  _MDP,
  _mDP,
  _mDPL,
  _mE,
  _MEDB,
  _mI,
  _mP,
  _mR,
  _MS,
  _mS,
  _mSo,
  _mT,
  _MV,
  _mV,
  _MVD,
  _mVD,
  _mVDL,
  _mVN,
  _mVNa,
  _mVo,
  _mVod,
  _nT,
  _o,
  _of,
  _OFIMDP,
  _OFIMDPL,
  _OFIMP,
  _OFITMV,
  _oP,
  _ou,
  _p,
  _pRC,
  _r,
  _rEM,
  _rIu,
  _RL,
  _RR,
  _rR,
  _RUE,
  _s,
  _sc,
  _sT,
  _t,
  _ta,
  _TDS,
  _tDS,
  _tDSr,
  _tf,
  _TFIMDP,
  _TFIMDPL,
  _TFIMP,
  _TFITMV,
  _ti,
  _TM,
  _tM,
  _TMV,
  _tMV,
  _tp,
  _TR,
  _tR,
  _tRC,
  _TRV,
  _tRV,
  _ty,
  _uBV,
  _UDV,
  _UDVR,
  _UDVRp,
  _uET,
  _UMV,
  _UMVR,
  _UMVRp,
  _UMVS,
  _UMVSR,
  _UMVSRp,
  _UR,
  _uR,
  _vI,
  _VIM,
  _vIM,
  _vN,
  _vNa,
  _vT,
  n0,
  tagList,
} from "./schemas_0";
import { Rule } from "./schemas_5_Version";
import { EventVariableMap, listOfEntities } from "./schemas_11_Event";

/* eslint no-var: 0 */

export var AggregatedLogOddsMetric = struct(n0, _ALOM, 0, [_vN, _aVI], [64 | 0, 1]);
export var AggregatedVariablesImportanceMetrics = struct(n0, _AVIM, 0, [_lOM], [() => ListOfAggregatedLogOddsMetrics]);
export var ATIMetricDataPoint = struct(n0, _ATIMDP, 0, [_cr, _ad, _t, _at], [1, 1, 1, 1]);
export var ATIModelPerformance = struct(n0, _ATIMP, 0, [_as], [1]);
export var ATITrainingMetricsValue = struct(
  n0,
  _ATITMV,
  0,
  [_mDP, _mP],
  [() => ATIMetricDataPointsList, () => ATIModelPerformance]
);
export var BatchPrediction = struct(
  n0,
  _BP,
  0,
  [_jI, _s, _fR, _sT, _cTo, _lHT, _iP, _oP, _eTN, _dN, _dV, _iRA, _a, _pRC, _tRC],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
);
export var CreateDetectorVersionRequest = struct(
  n0,
  _CDVR,
  0,
  [_dI, _d, _eME, _r, _mV, _rEM, _ta],
  [0, 0, 64 | 0, () => RuleList, () => ListOfModelVersions, 0, () => tagList]
);
export var CreateDetectorVersionResult = struct(n0, _CDVRr, 0, [_dI, _dVI, _s], [0, 0, 0]);
export var CreateModelVersionRequest = struct(
  n0,
  _CMVR,
  0,
  [_mI, _mT, _tDS, _tDSr, _eED, _iED, _ta],
  [0, 0, 0, () => TrainingDataSchema, () => ExternalEventsDetail, () => IngestedEventsDetail, () => tagList]
);
export var CreateModelVersionResult = struct(n0, _CMVRr, 0, [_mI, _mT, _mVN, _s], [0, 0, 0, 0]);
export var DataValidationMetrics = struct(
  n0,
  _DVM,
  0,
  [_fLM, _fLMi],
  [() => fileValidationMessageList, () => fieldValidationMessageList]
);
export var DeleteModelVersionRequest = struct(n0, _DMVR, 0, [_mI, _mT, _mVN], [0, 0, 0]);
export var DeleteModelVersionResult = struct(n0, _DMVRe, 0, [], []);
export var DescribeModelVersionsRequest = struct(n0, _DMVRes, 0, [_mI, _mVN, _mT, _nT, _mR], [0, 0, 0, 0, 1]);
export var DescribeModelVersionsResult = struct(n0, _DMVResc, 0, [_mVD, _nT], [() => modelVersionDetailList, 0]);
export var ExternalEventsDetail = struct(n0, _EED, 0, [_dL, _dARA], [0, 0]);
export var ExternalModelOutputs = struct(n0, _EMO, 0, [_eM, _ou], [() => ExternalModelSummary, 128 | 0]);
export var ExternalModelSummary = struct(n0, _EMS, 0, [_mE, _mS], [0, 0]);
export var FieldValidationMessage = struct(n0, _FVM, 0, [_fN, _i, _ti, _con, _ty], [0, 0, 0, 0, 0]);
export var FileValidationMessage = struct(n0, _FVMi, 0, [_ti, _con, _ty], [0, 0, 0]);
export var GetBatchPredictionJobsRequest = struct(n0, _GBPJR, 0, [_jI, _mR, _nT], [0, 1, 0]);
export var GetBatchPredictionJobsResult = struct(n0, _GBPJRe, 0, [_bP, _nT], [() => BatchPredictionList, 0]);
export var GetDetectorVersionRequest = struct(n0, _GDVR, 0, [_dI, _dVI], [0, 0]);
export var GetDetectorVersionResult = struct(
  n0,
  _GDVRe,
  0,
  [_dI, _dVI, _d, _eME, _mV, _r, _s, _lUT, _cT, _rEM, _a],
  [0, 0, 0, 64 | 0, () => ListOfModelVersions, () => RuleList, 0, 0, 0, 0, 0]
);
export var GetEventPredictionRequest = struct(
  n0,
  _GEPR,
  0,
  [_dI, _dVI, _eI, _eTN, _en, _eTv, _eV, _eMEDB],
  [0, 0, 0, 0, [() => listOfEntities, 0], 0, [() => EventVariableMap, 0], [() => ExternalModelEndpointDataBlobMap, 0]]
);
export var GetEventPredictionResult = struct(
  n0,
  _GEPRe,
  0,
  [_mSo, _rR, _eMO],
  [() => ListOfModelScores, () => ListOfRuleResults, () => ListOfExternalModelOutputs]
);
export var GetModelVersionRequest = struct(n0, _GMVR, 0, [_mI, _mT, _mVN], [0, 0, 0]);
export var GetModelVersionResult = struct(
  n0,
  _GMVRe,
  0,
  [_mI, _mT, _mVN, _tDS, _tDSr, _eED, _iED, _s, _a],
  [0, 0, 0, 0, () => TrainingDataSchema, () => ExternalEventsDetail, () => IngestedEventsDetail, 0, 0]
);
export var IngestedEventsDetail = struct(n0, _IED, 0, [_iETW], [() => IngestedEventsTimeWindow]);
export var IngestedEventsTimeWindow = struct(n0, _IETW, 0, [_sT, _eTnd], [0, 0]);
export var LabelSchema = struct(n0, _LS, 0, [_lM, _uET], [map(n0, _lM, 0, 0, 64 | 0), 0]);
export var LogOddsMetric = struct(n0, _LOM, 0, [_vNa, _vT, _vI], [0, 0, 1]);
export var MetricDataPoint = struct(n0, _MDP, 0, [_f, _p, _tp, _t], [1, 1, 1, 1]);
export var ModelEndpointDataBlob = struct(n0, _MEDB, 0, [_bB, _cTon], [21, 0]);
export var ModelScores = struct(n0, _MS, 0, [_mVo, _sc], [() => ModelVersion, 128 | 1]);
export var ModelVersion = struct(n0, _MV, 0, [_mI, _mT, _mVN, _a], [0, 0, 0, 0]);
export var ModelVersionDetail = struct(
  n0,
  _MVD,
  0,
  [_mI, _mT, _mVN, _s, _tDS, _tDSr, _eED, _iED, _tR, _lUT, _cT, _a, _tRV],
  [
    0,
    0,
    0,
    0,
    0,
    () => TrainingDataSchema,
    () => ExternalEventsDetail,
    () => IngestedEventsDetail,
    () => TrainingResult,
    0,
    0,
    0,
    () => TrainingResultV2,
  ]
);
export var OFIMetricDataPoint = struct(n0, _OFIMDP, 0, [_f, _p, _tp, _t], [1, 1, 1, 1]);
export var OFIModelPerformance = struct(n0, _OFIMP, 0, [_au, _uR], [1, () => UncertaintyRange]);
export var OFITrainingMetricsValue = struct(
  n0,
  _OFITMV,
  0,
  [_mDP, _mP],
  [() => OFIMetricDataPointsList, () => OFIModelPerformance]
);
export var ResourceUnavailableException = error(
  n0,
  _RUE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ResourceUnavailableException
);
export var RuleResult = struct(n0, _RR, 0, [_rIu, _o], [0, 64 | 0]);
export var TFIMetricDataPoint = struct(n0, _TFIMDP, 0, [_f, _p, _tp, _t], [1, 1, 1, 1]);
export var TFIModelPerformance = struct(n0, _TFIMP, 0, [_au, _uR], [1, () => UncertaintyRange]);
export var TFITrainingMetricsValue = struct(
  n0,
  _TFITMV,
  0,
  [_mDP, _mP],
  [() => TFIMetricDataPointsList, () => TFIModelPerformance]
);
export var TrainingDataSchema = struct(n0, _TDS, 0, [_mVod, _lS], [64 | 0, () => LabelSchema]);
export var TrainingMetrics = struct(n0, _TM, 0, [_au, _mDP], [1, () => metricDataPointsList]);
export var TrainingMetricsV2 = struct(
  n0,
  _TMV,
  0,
  [_of, _tf, _ati],
  [() => OFITrainingMetricsValue, () => TFITrainingMetricsValue, () => ATITrainingMetricsValue]
);
export var TrainingResult = struct(
  n0,
  _TR,
  0,
  [_dVM, _tM, _vIM],
  [() => DataValidationMetrics, () => TrainingMetrics, () => VariableImportanceMetrics]
);
export var TrainingResultV2 = struct(
  n0,
  _TRV,
  0,
  [_dVM, _tMV, _vIM, _aVIM],
  [
    () => DataValidationMetrics,
    () => TrainingMetricsV2,
    () => VariableImportanceMetrics,
    () => AggregatedVariablesImportanceMetrics,
  ]
);
export var UncertaintyRange = struct(n0, _UR, 0, [_lBV, _uBV], [1, 1]);
export var UpdateDetectorVersionRequest = struct(
  n0,
  _UDVR,
  0,
  [_dI, _dVI, _eME, _r, _d, _mV, _rEM],
  [0, 0, 64 | 0, () => RuleList, 0, () => ListOfModelVersions, 0]
);
export var UpdateDetectorVersionResult = struct(n0, _UDVRp, 0, [], []);
export var UpdateModelVersionRequest = struct(
  n0,
  _UMVR,
  0,
  [_mI, _mT, _mVNa, _eED, _iED, _ta],
  [0, 0, 0, () => ExternalEventsDetail, () => IngestedEventsDetail, () => tagList]
);
export var UpdateModelVersionResult = struct(n0, _UMVRp, 0, [_mI, _mT, _mVN, _s], [0, 0, 0, 0]);
export var UpdateModelVersionStatusRequest = struct(n0, _UMVSR, 0, [_mI, _mT, _mVN, _s], [0, 0, 0, 0]);
export var UpdateModelVersionStatusResult = struct(n0, _UMVSRp, 0, [], []);
export var VariableImportanceMetrics = struct(n0, _VIM, 0, [_lOM], [() => ListOfLogOddsMetrics]);
export var ATIMetricDataPointsList = list(n0, _ATIMDPL, 0, () => ATIMetricDataPoint);
export var BatchPredictionList = list(n0, _BPL, 0, () => BatchPrediction);
export var fieldValidationMessageList = list(n0, _fVML, 0, () => FieldValidationMessage);
export var fileValidationMessageList = list(n0, _fVMLi, 0, () => FileValidationMessage);
export var ListOfAggregatedLogOddsMetrics = list(n0, _LOALOM, 0, () => AggregatedLogOddsMetric);
export var ListOfExternalModelOutputs = list(n0, _LOEMO, 0, () => ExternalModelOutputs);
export var ListOfLogOddsMetrics = list(n0, _LOLOM, 0, () => LogOddsMetric);
export var ListOfModelScores = list(n0, _LOMS, 0, () => ModelScores);
export var ListOfModelVersions = list(n0, _LOMV, 0, () => ModelVersion);
export var ListOfRuleResults = list(n0, _LORR, 0, () => RuleResult);
export var metricDataPointsList = list(n0, _mDPL, 0, () => MetricDataPoint);
export var modelVersionDetailList = list(n0, _mVDL, 0, () => ModelVersionDetail);
export var OFIMetricDataPointsList = list(n0, _OFIMDPL, 0, () => OFIMetricDataPoint);
export var RuleList = list(n0, _RL, 0, () => Rule);
export var TFIMetricDataPointsList = list(n0, _TFIMDPL, 0, () => TFIMetricDataPoint);
export var ExternalModelEndpointDataBlobMap = map(n0, _EMEDBM, 8, 0, () => ModelEndpointDataBlob);
export var ExternalModelPredictionMap = 128 | 0;

export var labelMapper = map(n0, _lM, 0, 0, 64 | 0);
export var ModelPredictionMap = 128 | 1;

export var CreateDetectorVersion = op(
  n0,
  _CDV,
  0,
  () => CreateDetectorVersionRequest,
  () => CreateDetectorVersionResult
);
export var CreateModelVersion = op(
  n0,
  _CMV,
  0,
  () => CreateModelVersionRequest,
  () => CreateModelVersionResult
);
export var DeleteModelVersion = op(
  n0,
  _DMV,
  0,
  () => DeleteModelVersionRequest,
  () => DeleteModelVersionResult
);
export var DescribeModelVersions = op(
  n0,
  _DMVe,
  0,
  () => DescribeModelVersionsRequest,
  () => DescribeModelVersionsResult
);
export var GetBatchPredictionJobs = op(
  n0,
  _GBPJ,
  0,
  () => GetBatchPredictionJobsRequest,
  () => GetBatchPredictionJobsResult
);
export var GetDetectorVersion = op(
  n0,
  _GDV,
  0,
  () => GetDetectorVersionRequest,
  () => GetDetectorVersionResult
);
export var GetEventPrediction = op(
  n0,
  _GEP,
  0,
  () => GetEventPredictionRequest,
  () => GetEventPredictionResult
);
export var GetModelVersion = op(
  n0,
  _GMV,
  0,
  () => GetModelVersionRequest,
  () => GetModelVersionResult
);
export var UpdateDetectorVersion = op(
  n0,
  _UDV,
  0,
  () => UpdateDetectorVersionRequest,
  () => UpdateDetectorVersionResult
);
export var UpdateModelVersion = op(
  n0,
  _UMV,
  0,
  () => UpdateModelVersionRequest,
  () => UpdateModelVersionResult
);
export var UpdateModelVersionStatus = op(
  n0,
  _UMVS,
  0,
  () => UpdateModelVersionStatusRequest,
  () => UpdateModelVersionStatusResult
);
