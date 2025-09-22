// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aHP,
  _aHPR,
  _AMLC,
  _aMLC,
  _AMLR,
  _aMLR,
  _aTC,
  _bRA,
  _CD,
  _CDR,
  _CDRr,
  _cDT,
  _CHPR,
  _cHPR,
  _CHPRa,
  _cHPRa,
  _CHPRo,
  _CHPRon,
  _D,
  _Da,
  _dA,
  _da,
  _dat,
  _DDe,
  _DDRe,
  _DDRes,
  _dGA,
  _DSa,
  _DSesc,
  _DSRescr,
  _DSRescri,
  _DSV,
  _DSVR,
  _DSVRe,
  _dT,
  _DUS,
  _eC,
  _EDC,
  _eDC,
  _eT,
  _eVT,
  _fR,
  _fTP,
  _hC,
  _hO,
  _HPOC,
  _HPOO,
  _HPORC,
  _HPR,
  _hRC,
  _iA,
  _IHPR,
  _iHPR,
  _IHPRn,
  _LD,
  _LDR,
  _LDRi,
  _lDU,
  _lSU,
  _lSV,
  _lUDT,
  _mN,
  _mNOTJ,
  _mPTJ,
  _mR,
  _mRa,
  _mV,
  _mVa,
  _n,
  _nT,
  _OO,
  _oO,
  _oS,
  _pAML,
  _pAT,
  _pHPO,
  _rAe,
  _rL,
  _S,
  _s,
  _sA,
  _sAo,
  _SC,
  _sC,
  _so,
  _sUC,
  _SUS,
  _SV,
  _sV,
  _sVA,
  _t,
  _TDC,
  _tDC,
  _tH,
  _THPOP,
  _tHPOP,
  _tI,
  _tM,
  _tT,
  _ty,
  _v,
  n0,
  Tags,
} from "./schemas_0";
import { AutoTrainingConfig, EventsConfig, SolutionUpdateConfig } from "./schemas_15_Solution";
import { SolutionVersionSummary } from "./schemas_22_Solution";

/* eslint no-var: 0 */

export var AutoMLConfig = struct(n0, _AMLC, 0, [_mN, _rL], [0, 64 | 0]);
export var AutoMLResult = struct(n0, _AMLR, 0, [_bRA], [0]);
export var CategoricalHyperParameterRange = struct(n0, _CHPR, 0, [_n, _v], [0, 64 | 0]);
export var ContinuousHyperParameterRange = struct(n0, _CHPRo, 0, [_n, _mV, _mVa], [0, 1, 1]);
export var CreateDatasetRequest = struct(n0, _CDR, 0, [_n, _sA, _dGA, _dT, _t], [0, 0, 0, 0, [() => Tags, 0]]);
export var CreateDatasetResponse = struct(n0, _CDRr, 0, [_dA], [0]);
export var Dataset = struct(
  n0,
  _D,
  0,
  [_n, _dA, _dGA, _dT, _sA, _s, _cDT, _lUDT, _lDU, _tI],
  [0, 0, 0, 0, 0, 0, 4, 4, () => DatasetUpdateSummary, 0]
);
export var DatasetSummary = struct(n0, _DSa, 0, [_n, _dA, _dT, _s, _cDT, _lUDT], [0, 0, 0, 0, 4, 4]);
export var DatasetUpdateSummary = struct(n0, _DUS, 0, [_sA, _s, _fR, _cDT, _lUDT], [0, 0, 0, 4, 4]);
export var DescribeDatasetRequest = struct(n0, _DDRe, 0, [_dA], [0]);
export var DescribeDatasetResponse = struct(n0, _DDRes, 0, [_da], [() => Dataset]);
export var DescribeSolutionRequest = struct(n0, _DSRescr, 0, [_sAo], [0]);
export var DescribeSolutionResponse = struct(n0, _DSRescri, 0, [_so], [() => Solution]);
export var DescribeSolutionVersionRequest = struct(n0, _DSVR, 0, [_sVA], [0]);
export var DescribeSolutionVersionResponse = struct(n0, _DSVRe, 0, [_sV], [() => SolutionVersion]);
export var HPOConfig = struct(
  n0,
  _HPOC,
  0,
  [_hO, _hRC, _aHPR],
  [() => HPOObjective, () => HPOResourceConfig, () => HyperParameterRanges]
);
export var HPOObjective = struct(n0, _HPOO, 0, [_ty, _mN, _mR], [0, 0, 0]);
export var HPOResourceConfig = struct(n0, _HPORC, 0, [_mNOTJ, _mPTJ], [0, 0]);
export var HyperParameterRanges = struct(
  n0,
  _HPR,
  0,
  [_iHPR, _cHPR, _cHPRa],
  [() => IntegerHyperParameterRanges, () => ContinuousHyperParameterRanges, () => CategoricalHyperParameterRanges]
);
export var IntegerHyperParameterRange = struct(n0, _IHPR, 0, [_n, _mV, _mVa], [0, 1, 1]);
export var ListDatasetsRequest = struct(n0, _LDR, 0, [_dGA, _nT, _mRa], [0, 0, 1]);
export var ListDatasetsResponse = struct(n0, _LDRi, 0, [_dat, _nT], [() => Datasets, 0]);
export var OptimizationObjective = struct(n0, _OO, 0, [_iA, _oS], [0, 0]);
export var Solution = struct(
  n0,
  _S,
  0,
  [_n, _sAo, _pHPO, _pAML, _pAT, _rAe, _dGA, _eT, _sC, _aMLR, _s, _cDT, _lUDT, _lSV, _lSU],
  [
    0,
    0,
    2,
    2,
    2,
    0,
    0,
    0,
    () => SolutionConfig,
    () => AutoMLResult,
    0,
    4,
    4,
    () => SolutionVersionSummary,
    () => SolutionUpdateSummary,
  ]
);
export var SolutionConfig = struct(
  n0,
  _SC,
  0,
  [_eVT, _hC, _aHP, _fTP, _aMLC, _eC, _oO, _tDC, _aTC],
  [
    0,
    () => HPOConfig,
    128 | 0,
    128 | 0,
    () => AutoMLConfig,
    () => EventsConfig,
    () => OptimizationObjective,
    () => TrainingDataConfig,
    () => AutoTrainingConfig,
  ]
);
export var SolutionUpdateSummary = struct(
  n0,
  _SUS,
  0,
  [_sUC, _s, _pAT, _cDT, _lUDT, _fR],
  [() => SolutionUpdateConfig, 0, 2, 4, 4, 0]
);
export var SolutionVersion = struct(
  n0,
  _SV,
  0,
  [_n, _sVA, _sAo, _pHPO, _pAML, _rAe, _eT, _dGA, _sC, _tH, _tM, _tHPOP, _s, _fR, _cDT, _lUDT, _tT],
  [0, 0, 0, 2, 2, 0, 0, 0, () => SolutionConfig, 1, 0, () => TunedHPOParams, 0, 0, 4, 4, 0]
);
export var TrainingDataConfig = struct(n0, _TDC, 0, [_eDC], [map(n0, _EDC, 0, 0, 64 | 0)]);
export var TunedHPOParams = struct(n0, _THPOP, 0, [_aHP], [128 | 0]);
export var ArnList = 64 | 0;

export var CategoricalHyperParameterRanges = list(n0, _CHPRa, 0, () => CategoricalHyperParameterRange);
export var ColumnNamesList = 64 | 0;

export var ContinuousHyperParameterRanges = list(n0, _CHPRon, 0, () => ContinuousHyperParameterRange);
export var Datasets = list(n0, _Da, 0, () => DatasetSummary);
export var IntegerHyperParameterRanges = list(n0, _IHPRn, 0, () => IntegerHyperParameterRange);
export var ExcludedDatasetColumns = map(n0, _EDC, 0, 0, 64 | 0);
export var FeatureTransformationParameters = 128 | 0;

export var CreateDataset = op(
  n0,
  _CD,
  2,
  () => CreateDatasetRequest,
  () => CreateDatasetResponse
);
export var DescribeDataset = op(
  n0,
  _DDe,
  2,
  () => DescribeDatasetRequest,
  () => DescribeDatasetResponse
);
export var DescribeSolution = op(
  n0,
  _DSesc,
  2,
  () => DescribeSolutionRequest,
  () => DescribeSolutionResponse
);
export var DescribeSolutionVersion = op(
  n0,
  _DSV,
  2,
  () => DescribeSolutionVersionRequest,
  () => DescribeSolutionVersionResponse
);
export var ListDatasets = op(
  n0,
  _LD,
  2,
  () => ListDatasetsRequest,
  () => ListDatasetsResponse
);
